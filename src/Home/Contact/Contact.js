import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { toast } from 'react-toastify';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9v3h2ya', 'template_jc8mjdb', form.current, 'KRPiRRn6J01NzkgPK')
        .then((result) => {
            console.log(result.text);
            toast.success("message sent successfully")
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id="contact" className='mx-auto m-8 rounded-2xl bg-base-300 lg:p-8 shadow-lg shadow-blue-500/50 lg:w-1/3 md:w-3/5 w-4/5 mt-28'>
            <h2 className='text-2xl text-orange-400'>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
     <div>
     <label> <span className='text-xl '>Name:</span> </label>
      <input id="name" type="text" name="user_name" />
     </div>
      <div>
      <label><span className='text-xl'>Email:</span></label>
      <input id="email" type="email" name="user_email" />
      </div>
    <div className=''>
        <p>Message</p>
      <textarea id="textarea" name="message" />

    </div>
      <button className='btn btn-primary'><input type="submit" value="Send" /></button>
    </form>

        </div>
    );
};

export default Contact;