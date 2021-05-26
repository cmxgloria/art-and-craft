import React from 'react';
import './contact.styles.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h2>Email: smilec2008@hotmail.com</h2>
        <h2>
          I am a website designer as well. Happy to build your own awesome
          website.
        </h2>
        <h3>
          Please copy my website to browser to view. Sometimes it is not working
          when you just click on the mobile because of "Surge" open source not
          support.
        </h3>
        <h2>
          Payment: Please Place Order in the Cart,Take Checkout Photo to Me then
          I Organise Payment
        </h2>
        <h2>Address: Elizabeth Street Victoria, 3000</h2>
        <h2>Available: More Design on Each Product and Welcome Your Enquiry</h2>
        <h3>Within Australia Post available</h3>
      </div>
    );
  }
}
