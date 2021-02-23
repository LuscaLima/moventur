// Style
import style from "./style.module.scss";

export default function CompleteChallenges() {
  return (
    <div className={style.complete}>
      <span>Desafios concluídos</span>
      <span>
        <strong>12</strong>
      </span>
    </div>
  );
}
