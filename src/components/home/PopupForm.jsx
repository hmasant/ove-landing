import { useState } from "react";
import style from "./style.module.css";
import { UpdateContext } from "../../context";

export default function PopupForm() {
  const update = UpdateContext();

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

    update.togglePopup();
    navigate("/thanks");
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
          <img
            style={{ width: "12rem" }}
            fetchPriority="low"
            src="/logo.svg"
            loading="lazy"
            alt="OVE Logo"
          />
          <br />
          <form action={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <div className="grid_two email-box-parent">
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Phone" required />
            </div>
            <textarea placeholder="Project Description"></textarea>
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
