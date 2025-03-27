import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brief, setBrief] = useState("");

  const cfUrl = "https://tight-pond-b68f.himanshu-masant-6f5.workers.dev/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postRequest(cfUrl, { name, email, phone, brief });

    setName("");
    setPhone("");
    setEmail("");
    setBrief("");

    setPopupOpen(false);
    navigate("/thanks");
  };

  return (
    <footer className="grid_two footer-main-parent">
      <div></div>
      <div className="footer_form">
        <div>
          <h2 className="white_heading contact-form-title">Share Your Requirements</h2>
          <form action={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <div className="grid_two email-box-parent">
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Phone" required />
            </div>
            <textarea placeholder="Project Description"></textarea>
            <div className="submit-btn-parent">
              <button type="submit" className="submit-btn">Book a Free Consultation</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
