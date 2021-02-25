import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'

// Style
import style from './style.module.scss'

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  )

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  )

  return (
    <header className={style.experienceBar}>
      <span className={style.from}>0 XP</span>
      <div className={style.progress}>
        <div className={style.done} style={{ width: `${percentToNextLevel}%` }}>
          <span className={style.current}>{currentExperience} XP</span>
        </div>
      </div>
      <span className={style.to}>{experienceToNextLevel} XP</span>
    </header>
  )
}
