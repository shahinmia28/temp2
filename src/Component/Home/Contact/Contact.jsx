import "./Contact.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uxz2wz3",
        "template_a3bkxmc",
        form.current,
        "jkYs_JR56BJQ6vazO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setConfirm("Thanks for Your massage");
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 form-container">
            <div className="form-box p-3">
              <div className="my-title">
                <h2>contact us</h2>
                <div className="title-underLine"></div>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="form-control"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="form-control"
                  required
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="90"
                  rows="4"
                  className="form-control"
                  placeholder="Write your massage..."
                  required
                ></textarea>

                <input type="submit" value="Send" className="btn contact-btn" />
                <span className="mx-2">{confirm}</span>
              </form>
            </div>
          </div>

          <div className="col-12 col-md-6 map-container">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=bhuapur,%20tangail,%20dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
