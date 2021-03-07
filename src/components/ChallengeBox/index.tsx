import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'
import { CountdownContext } from '../../contexts/CountdownContext'
import MButton from '../Button'

// Style
import style from './style.module.scss'

// Icons
import { FaAngleDoubleUp, FaFrown, FaSmile } from 'react-icons/fa'

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext
  )
  const { reset: resetCountdown } = useContext(CountdownContext)

  // Succeeded and reset countdown
  function handleSuccess() {
    completeChallenge()
    resetCountdown()
  }

  // Failed and reset countdown
  function handleFail() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={style.challengeBox}>
      {activeChallenge ? (
        <div className={style.active}>
          <header>
            <strong>Ganhe {activeChallenge.amount} xp</strong>
            {activeChallenge.type === 'body' ? (
              <img
                src="icons/body.svg"
                alt="Exercício de corpo"
                loading="lazy"
              />
            ) : (
              <img
                src="icons/eye_minimal.svg"
                alt="Excercício de olho"
                loading="lazy"
              />
            )}
          </header>
          <main>
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <MButton theme="red" block onClick={handleFail}>
              Falhei
              <FaFrown />
            </MButton>
            <MButton theme="green" block onClick={handleSuccess}>
              Completei
              <FaSmile />
            </MButton>
          </footer>
        </div>
      ) : (
        <div className={style.notActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            {/* <img src="icons/level-up.svg" alt="Level up" loading="lazy" /> */}
            <span>
              <FaAngleDoubleUp />
            </span>
            Complete-os, ganhe experiência e avançe de nível.
          </p>
        </div>
      )}
    </div>
  )
}
