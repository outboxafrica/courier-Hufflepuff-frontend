import { useState } from "react";
import emailjs from "emailjs-com";
import Style from "../styles/Form.module.css";
import { toast } from "react-toastify";
import{ init } from 'emailjs-com';
init("user_FdYzBGcfFAGMkHWi5GL58");

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      // TODO - send mail
      const serviceId ="service_2ez7ovx";
      const templateId = "template_3kplp8c";
      const templateParams = {
        name,
        email,
        message,
      };
      console.log(process.env.NEXT_SERVICE_ID);

      emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
        toast.success("Thank you for your message we will be in touch in no time");

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className={Style.container}>
      {/* <label style={{fontFamily:"Times New Roman" , fontSize:"15"}}>NAME</label> */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <label style={{fontFamily:"Times New Roman" , fontSize:"15"}}>EMAIL</label> */}
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <label style={{fontFamily:"Times New Roman" , fontSize:"15"}}>Message</label> */}
      <textarea
        placeholder="Your message"
        value={message}
        style={{
          padding: "10px",
          minWidth: "480px",
          minHeight: "200px",
          marginBottom: "10px",
        }}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        onClick={submit}
        style={{
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#6f42c1",
          padding: "12px",
          width: "200px",
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default Contact;
