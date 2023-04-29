import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <>
            <div className="container">


                <h1>Contact us</h1>
                <div className="contact-box">
                    <form action="/">
                        <div className="nameBox">
                            <label htmlFor="Name">Name</label>
                            <div>
                                <input placeholder='First Name' type="text" name="name" id="name" />
                                <input placeholder='Last Name' type="text" name="name" id="name" />
                            </div>
                        </div>
                        <div className="emailBox">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="messageBox">
                            <label htmlFor="message">Comment or Message</label>
                            <textarea placeholder='Enter something about yourself here...' name="message" id="commentOrMessage" cols="60" rows="10"></textarea>
                        </div>
                        <div className='btn'>
                            <button>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact