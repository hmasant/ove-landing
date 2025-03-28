import { useState } from "react";
import style from "./style.module.css";
import { UpdateContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../network/request";

export default function PopupForm() {
  const update = UpdateContext();
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

      update.togglePopup();
      navigate("/thanks");
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <section className={style.popup_section}>
      <div className={style.popup_form}>
        <button
          className={style.popup_close_btn}
          onClick={() => update.togglePopup()}
        >
          X
        </button>
        <div></div>
        <div>
          <h2>Share Your Requirements</h2>
          <br />
          <br />
          <br />
          <form onSubmit={handleSubmit}>
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
    </section>
  );
}
