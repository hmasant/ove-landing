import style from "./style.module.css";

export default function HiringProcess() {
  return (
    <center className="hiring-process-main-parent">
      <div className="hiring-process-inner-parent">
      <p className={style.red_description}>Our Hiring Process</p>
      <h2 className="black_heading">
        <b>
          Hire your next developer in <br /> 3 simple steps
        </b>
      </h2>
      <div className="hiring-image-parent">
      <img
        src="/hiring_process.svg"
        fetchPriority="low"
        loading="lazy"
        alt="Image"
      />
      </div>
      </div>
    </center>
  );
}
