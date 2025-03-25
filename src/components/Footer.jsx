import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brief, setBrief] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <footer className="grid_two">
      <div></div>
      <div className="footer_form">
        <div>
          <h2 className="white_heading">Share Your Requirements</h2>
          <br />
          <br />
          <form action={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <br />
            <br />
            <br />
            <div className="grid_two">
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Phone" required />
            </div>
            <br />
            <br />
            <br />
            <textarea placeholder="Project Description"></textarea>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
              <button type="submit">Book a Free Consultation</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
