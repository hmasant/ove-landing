import style from "./style.module.css";

export default function HiringProcess() {
  return (
    <center>
      <p className={style.red_description}>Our Hiring Process</p>
      <br />
      <h2 className="black_heading">
        <b>
          Hire your next developer in <br /> 3 simple steps
        </b>
      </h2>
      <br />
      <br />
      <br />
      <img
        style={{ width: "80vw" }}
        src="/hiring_process.svg"
        fetchPriority="low"
        loading="lazy"
        alt="Image"
      />
    </center>
  );
}
