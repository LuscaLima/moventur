import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'

// Style
import style from './style.module.scss'

// Icons
import { FaBolt } from 'react-icons/fa'

export default function CompleteChallenges() {
  const { completedChallenges } = useContext(ChallengeContext)

  return (
    <div className={`my-4 pb-3 ${style.complete}`}>
      <span>
        {/* <img src="/icons/lightning.svg" alt="Ícone dos desafios completos" /> */}
        <FaBolt />
        Desafios concluídos
      </span>
      <span>
        <strong>{completedChallenges.toString().padStart(2, '0')}</strong>
      </span>
    </div>
  )
}
