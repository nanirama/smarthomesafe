import React from 'react'

const Contact = () => {
    return (
        <div className="contact_from_area" data-aos="fade-down-right">
            <h3>Send Us a Message</h3>
            <div className="contact_from_input">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact"/>
                <div className="row">
                    <div className="col-12">
                    <div className="single_input">
                        <input type="text" name="name" placeholder="Full Name" />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="single_input">
                        <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="single_input">
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="single_input">
                        <textarea name="message" placeholder="Message" defaultValue={""} />
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="Submit_button">
                        <button type="submit">SEND</button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
    )
}

export default Contact
