import React, { useEffect } from 'react';

// components
import PageHeader from '../../layout/PageHeader';
import GetInTouch from './GetInTouch';
import ContactInfo from './ContactInfo';

export default function Contact() {

  // page title
  useEffect(() => {
    document.title='Contact | Nature Lovers BD';
  });

  return (
    <>
      <PageHeader />
      <GetInTouch />
      <ContactInfo />
    </>
  )
}
