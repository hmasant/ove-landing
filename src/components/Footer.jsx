import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../network/request";

export default function Footer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brief, setBrief] = useState("");

  const cfUrl = "https://tight-pond-b68f.himanshu-masant-6f5.workers.dev/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postRequest(cfUrl, { name, email, phone, brief });

      setName("");
      setPhone("");
      setEmail("");
      setBrief("");

      navigate("/thanks");
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <footer className="grid_two footer-main-parent">
      <div></div>
      <div className="footer_form">
        <div>
          <h2 className="white_heading contact-form-title">
            Share Your Requirements
          </h2>
          <form className="form-parent" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="grid_two email-box-parent">
              <input
                type="email"     
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <textarea
              value={brief}
              placeholder="Project Description"
              onChange={(e) => setBrief(e.target.value)}
            ></textarea>
            <div className="submit-btn-parent">
              <button type="submit" className="submit-btn">
                Book a Free Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
