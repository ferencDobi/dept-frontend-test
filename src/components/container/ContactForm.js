import React, {Component} from "react";
import * as yup from 'yup';
import {FormField} from "../presentational/FormField";
import ContactApi from "../../api/ContactApi";
import {LoadingIndicator} from "../presentational/LoadingIndicator";

const text = 'Question? We are here to help!';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.initialState, messages: [], loading: false}
  }

  initialState = {
    name: {
      value: "", label: "Name", name: "name", type: "text", error: null, required: true
    },
    email: {
      value: "", label: "Email", name: "email", type: "email", error: null, required: true
    },
    message: {
      value: "", label: "Message", name: "message", type: "textarea", error: null, required: true
    }
  };

  getFormData = () => {
    return {
      name: this.state.name.value,
      email: this.state.email.value,
      message: this.state.message.value
    };
  };

  handleChange = event => {
    let target = event.target.name;
    this.setState({[target]: Object.assign({}, this.state[target], {value: event.target.value})});
  };

  validateFields = formData => {
    let requireMessage = 'This field is required';

    let schema = yup.object().shape({
      name: yup.string().required(requireMessage),
      email: yup.string().email('Email should be valid').required(requireMessage),
      message: yup.string().required(requireMessage)
    });

    return schema.validate(formData, { abortEarly: false });
  };

  sendForm = formData => {
    this.setState({ loading: true });
    ContactApi.sendMessage(formData).then(() => {
      this.setState({
        ...this.initialState,
        messages: [{type: "success",  text: "Your message was sent. We'll get back to you shortly!"}]
      });
    }).catch(error => {
      this.setState({
        messages: [{type: "error",  text: "An error has occurred. Please try again later."}]
      });
      console.error(error);
    }).finally(() => {
      this.setState({ loading: false });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let formData = this.getFormData();

    this.validateFields(formData).then(() => {
      this.sendForm(formData);
    }).catch(reason => {
      reason.inner.forEach(field => {
        this.setState({
          [field.path]: Object.assign({}, this.state[field.path], {error: field.message})
        });
      });
    });
  };

  render() {
    let fields = [this.state.name, this.state.email, this.state.message];
    let { messages, loading } = this.state;

    return (
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <h1>{text}</h1>
          {fields.map(field =>
              <FormField key={field.name} field={field} changeHandler={this.handleChange}/>
          )}
          <button type="submit" disabled={loading}>
            {loading ? <LoadingIndicator/> : 'Send'}
          </button>
          {messages.map((message, i) =>
              <p key={`message-${i}`} className={`${message.type}-message`}>{message.text}</p>
          )}
        </form>
    );
  }
}