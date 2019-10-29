import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: ''
    });

    const { name, email, text } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                text: text
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                setFormData({
                    name: '',
                    email: '',
                    text: ''
                });
                //this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    };



    return (
        <div className="col-sm-4 offset-sm-4">
            <form id="contact-form" onSubmit={e => onSubmit(e)} method="POST" >
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea type="text" className="form-control" rows="5" id="message" name="text" value={text} onChange={e => onChange(e)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
            </form>
        </div>
    )

}

export default ContactForm;

