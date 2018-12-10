import React, {Component} from "react";
import {FormField} from "../presentational/FormField";
import ContactApi from "../../api/ContactApi";

const text = 'Question? We are here to help!';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.initialState, messages: []}
  }

  initialState = {
    name: {
      value: "", label: "Name", name: "name", type: "text", required: true
    },
    email: {
      value: "", label: "Email", name: "email", type: "email", required: true
    },
    message: {
      value: "", label: "Message", name: "message", type: "textarea", required: true
    }
  };

  handleChange = event => {
    let target = event.target.name;
    this.setState({[target]: Object.assign({}, this.state[target], {value: event.target.value})});
  };

  handleSubmit = event => {
    //TODO: form validation
    event.preventDefault();
    ContactApi.sendMessage(this.state).then(_ => {
      this.setState({messages: [{type: "success",  text: "Your message was sent. We'll get back to you shortly!"}]});
    }).catch(error => {
      this.setState({messages: [{type: "error",  text: "An error has occurred. Please try again later."}]});
      console.error(error);
    }).finally(() => {
      this.setState({...this.initialState});
    });
  };


  render() {
    let fields = [this.state.name, this.state.email, this.state.message];
    let messages = this.state.messages;

    return (
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <h1>{text}</h1>
          {fields.map(field =>
              <FormField key={field.name} field={field} changeHandler={this.handleChange}/>
          )}
          <button type="submit">Send</button>
          {messages.map((message, i) =>
              <p key={`message-${i}`} className={`${message.type}-message`}>{message.text}</p>
          )}
        </form>
    );
  }
}