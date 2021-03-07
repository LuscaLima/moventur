import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'

// Style
import style from './style.module.scss'

// Icons
import { FaBolt, FaCrown } from 'react-icons/fa'

export default function Profile() {
  const { level, completedChallenges } = useContext(ChallengeContext)

  return (
    <div className={`${style.profile} mb-4 mb-md-2`}>
      <img
        src="https://github.com/luscalima.png"
        alt="Lusca Lima"
        loading="lazy"
        className={style.photo}
      />
      <div className={style.description}>
        <h3 className={style.name}>Lusca Lima</h3>
        <div className={style.infos}>
          <p className={style.level}>
            <FaCrown />
            <strong>{level.toString().padStart(2, '0')}</strong>
          </p>
          <p className={style.completed}>
            <FaBolt />
            <strong>{completedChallenges.toString().padStart(2, '0')}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
