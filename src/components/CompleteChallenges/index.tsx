import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'

// Style
import style from './style.module.scss'

export default function CompleteChallenges() {
  const { completedChallenges } = useContext(ChallengeContext)

  return (
    <div className={style.complete}>
      <span>Desafios concluídos</span>
      <span>
        <strong>{completedChallenges.toString().padStart(2, '0')}</strong>
      </span>
    </div>
  )
}
