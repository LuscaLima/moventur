// Components
import ExperienceBar from "../components/ExperienceBar";
import Container from "../components/Container";
import Profile from "../components/Profile";

// Style
import style from "../style/scss/pages/home.style.module.scss";
import CompleteChallenges from "../components/CompleteChallenges";

export default function Home() {
  return (
    <Container>
      <ExperienceBar />
      <section className={style.home}>
        <div className={style.leftContainer}>
          <Profile />
          <CompleteChallenges />
        </div>
        <div className={style.rightContainer}></div>
      </section>
    </Container>
  );
}
