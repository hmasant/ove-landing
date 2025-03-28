import style from "./style.module.css";

export default function ThanksScreen() {
  return (
    <section className={style.thanks_sec}>
      <div>
        <h1>Thank you!</h1>
        <br />
        <p>
          Thanks for your query. Our representative will get in touch with you
          soon.
        </p>
      </div>
    </section>
  );
}
