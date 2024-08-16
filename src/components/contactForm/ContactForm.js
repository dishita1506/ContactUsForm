import React from 'react';
import './ContactForm.css';
import { MdMessage, MdCall, MdAttachEmail } from 'react-icons/md';
import Button from '../button/Button';

function ContactForm() {
    console.log("This is button", Button);
    return (
        <section className='container'>
            <div className="contactForm">
                <div className="topButton">
                    <Button text={"VIA SUPPORT CHAT"} icon={<MdMessage />} />
                    <Button text={"VIA CALL"} icon={<MdCall />} />
                </div>
                <Button text={"VIA EMAIL FORM"} icon={<MdAttachEmail />} isOutline={true} />

                <form>
                    <div className="form_control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' placeholder='John Disouza'/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='John123@gmail.com'/>
                    </div>
                    <div className="form_control">
                        <label htmlFor="text">Text</label>
                       <textarea name="text" rows={5}></textarea>
                    </div>
                    <div> <Button text={"Submit"}></Button></div>
                </form>
            </div>
            <div className="contactImage">
                <img src="/images/contact.svg" alt="" />
            </div>
        </section>
    );
}

export default ContactForm;
