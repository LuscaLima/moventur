import ChallengesProvider from "../contexts/ChallengeContext";

// Style
import "../style/global.scss";

function Moventur({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default Moventur;
