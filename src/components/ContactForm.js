import React, { useEffect, useRef, useState } from "react";
import { MdMessage } from "react-icons/md";
import Contact from "../assets/images/contact.png";
import { useIsVisible } from "../assets/hooks/useIsVisible";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { LuMail, LuPhone } from "react-icons/lu";

const ContactForm = ({ showWave }) => {
  let navigate = useNavigate();

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const [toSend, setToSend] = useState({
    from_name: "",
    subject: "",
    phone_number: "",
    message: "",
    reply_to: "",
  });

  // const [responseStatus, setResponseStatus] = useState();

  const [button, setButton] = useState(false);

  useEffect(() => {
    if (
      toSend.from_name !== "" &&
      toSend.subject !== "" &&
      toSend.message !== "" &&
      toSend.reply_to !== ""
    ) {
      setButton(true);
    } else {
      setButton(false);
    }
    console.log(toSend);
  }, [toSend, setButton]);

  const onSubmit = (e) => {
    e.preventDefault();
    // if(toSend.phone_number === ""){
    //     setToSend({...toSend, phone_number: "NOT PROVIDED"})
    // }]
    setButton(false);
    if (
      toSend.from_name !== "" &&
      toSend.subject !== "" &&
      toSend.message !== "" &&
      toSend.reply_to !== ""
    ) {
      navigate("/loading");
      send(process.env.REACT_APP_EJS_SERVICE, process.env.REACT_APP_EJS_TEMP, toSend, process.env.REACT_APP_EJS_PUBLIC)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          // setResponseStatus(response.status)
        })
        .then(() => {
          setToSend({
            from_name: "",
            subject: "",
            phone_number: "",
            message: "",
            reply_to: "",
          });
          navigate("/submitted");
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
    setButton(false);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="our-services past-projects our-blog contact-form">
      {showWave === false ? (
        ""
      ) : (
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 960 105"
        >
          <title>wave-haikei (3)-svg</title>
          <path
            id="Layer"
            style={{ fill: "#141414" }}
            d="m960 85l-26.7-6.7c-26.6-6.6-80-20-133.3-31.3-53.3-11.3-106.7-20.7-160-10.5-53.3 10.2-106.7 39.8-160 53.3-53.3 13.5-106.7 10.9-160-5.6-53.3-16.5-106.7-46.9-160-54.7-53.3-7.8-106.7 6.8-133.3 14.2l-26.7 7.3v-51h26.7c26.6 0 80 0 133.3 0 53.3 0 106.7 0 160 0 53.3 0 106.7 0 160 0 53.3 0 106.7 0 160 0 53.3 0 106.7 0 160 0 53.3 0 106.7 0 133.3 0h26.7z"
          />
        </svg>
      )}
      <div className="our-services-container contact-form-parent">
        <div className="blob2"></div>
        <h2
          ref={ref1}
          className={`our-services-title hide ${
            isVisible1 && "move-in move-in-top"
          }`}
        >
          Contact <span>Us</span>.
        </h2>
        <MdMessage
          className={`phone hide ${isVisible1 && "move-in move-in-top"}`}
        />
        <div
          className={`contact-form-container container hide ${
            isVisible2 && "move-in move-in-right"
          }`}
        >
          <div>
            <div className="contact-form-box">
              <form className="contactForm">
                <div className="contactFormRow">
                  <div className="contactFormInput">
                    <div className="contactFormLabel">
                      <label
                        for="from_name"
                        ref={ref2}
                        className="contactFormLabelText"
                      >
                        Name:
                      </label>
                      <p className="contactFormStar">*</p>
                    </div>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={toSend.from_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contactFormInput">
                    <div className="contactFormLabel">
                      <label for="reply_to" className="contactFormLabelText">
                        Email:
                      </label>
                      <p className="contactFormStar">*</p>
                    </div>
                    <input
                      type="text"
                      id="reply_to"
                      name="reply_to"
                      value={toSend.reply_to}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Bottom row */}

                <div className="contactFormRow">
                  <div className="contactFormInput">
                    <div className="contactFormLabel">
                      <label
                        for="phone-number"
                        className="contactFormLabelText"
                      >
                        Phone number:
                      </label>
                      <p className="contactFormStar"></p>
                    </div>
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      value={toSend.phone_number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contactFormInput">
                    <div className="contactFormLabel">
                      <label for="subject" className="contactFormLabelText">
                        Subject:
                      </label>
                      <p className="contactFormStar">*</p>
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={toSend.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Message */}

                <div className="contactFormTextareaSection">
                  <div className="contactFormLabel">
                    <label for="message" className="contactFormLabelText">
                      Message:
                    </label>
                    <p className="contactFormStar">*</p>
                  </div>
                  <textarea
                    id="message"
                    className="contactFormTextarea"
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    className={`btn-solid home-btn contact-btn ${
                      button && "contact-btn-active"
                    }`}
                    onClick={onSubmit}
                    disabled={!button}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-form-right">
              <img src={Contact} alt="" />
              <div>
                <p>
                  Phone:<br></br>
                  <a href="tel:+16133553311">+1 (613) 355-3311</a>
                </p>
                <p>
                  Email:<br></br>
                  <a href="mailto:info@ethertechnologies.ca">
                    info@ethertechnologies.ca
                  </a>
                </p>
                <p>
                  Location:<br></br>Ottawa, ON
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
