import "../assets/css/section.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("Drop me a line!");

  const handleNameChange = (event) => {
    setName(event.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wnbmjwt",
        "template_sc2zd7m",
        form.current,
        "JB9tKLd_APnPs_0GS"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            setName("");
            setSubject("");
            setEmail("");
            setMessage("");
            setSuccess("Email successfully sent");
          } else {
            setSuccess("There was an error sending your email: ");
          }
        },
        (error) => {
          console.log(error.text);
          setSuccess(success + error.text);
        }
      );
  };

  return (
    <div className="section" id="contact">
      <div className="section-header gradient">Contact Me</div>
      <div className="section-body">
        <h3 style={{ textAlign: "center", marginTop: "-10px" }}>{success}</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            requried
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={handleSubjectChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            required
          />
          <input className="submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
