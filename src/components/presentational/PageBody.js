import React from 'react';
import MainContent from "../container/MainContent";
import {ClientList} from "./ClientList";
import {ContactForm} from "../container/ContactForm";

export const PageBody = () => {
  return (
      <div>
        <MainContent/>
        <ClientList/>
        <ContactForm/>
      </div>
  );
};