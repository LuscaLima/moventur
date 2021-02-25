import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'
import { CountdownContext } from '../../contexts/CountdownContext'

// Style
import style from './style.module.scss'

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
            <strong>Ganhe {activeChallenge.amount} XP</strong>
          </header>
          <main>
            {activeChallenge.type === 'body' ? (
              <img
                src="icons/body.svg"
                alt="Exercício de corpo"
                loading="lazy"
              />
            ) : (
              <img
                src="icons/eye.svg"
                alt="Excercício de olho"
                loading="lazy"
              />
            )}
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={style.failButton}
              onClick={handleFail}
            >
              Falhei
            </button>
            <button
              type="button"
              className={style.completeButton}
              onClick={handleSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.notActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" loading="lazy" />
            Complete-os, ganhe experiência e avançe de nível.
          </p>
        </div>
      )}
    </div>
  )
}
