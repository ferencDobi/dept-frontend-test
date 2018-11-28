import React from 'react';
import {MainContent} from "./MainContent";
import {ClientList} from "./ClientList";
import {ContactForm} from "./ContactForm";

export const PageBody = () => {
  return (
      <div>
        <MainContent/>
        <ClientList/>
        <ContactForm/>
      </div>
  );
};