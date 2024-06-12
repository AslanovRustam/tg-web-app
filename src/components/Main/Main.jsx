import s from "./main.module.css";
import plane1 from "../../images/plane1.png";
import plane2 from "../../images/plane2.png";
import plane3 from "../../images/plane3.png";

export default function Main() {
  return (
    <div className={s.container}>
      <img className={`${s.plane} ${s.plane1}`} src={plane1} alt="plain1" />
      <img className={`${s.plane} ${s.plane2}`} src={plane2} alt="plain2" />
      <img className={`${s.plane} ${s.plane3}`} src={plane3} alt="plain3" />
    </div>
  );
}
