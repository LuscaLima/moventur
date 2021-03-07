import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'
import MButton from '../Button'

// Style
import style from './style.module.scss'

// Icons
import { FaTimes } from 'react-icons/fa'

export default function LevelUpModal() {
  const { level, closeModalLevel } = useContext(ChallengeContext)

  return (
    <div className={style.levelUpModal}>
      <div className={style.content}>
        <span className={style.close} title="Fechar" onClick={closeModalLevel}>
          <FaTimes />
        </span>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você subiu de nível</p>
        {/* <MButton theme="red">
          Fechar
        </MButton> */}
      </div>
    </div>
  )
}
