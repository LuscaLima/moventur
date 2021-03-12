// Style
import style from './style.module.scss'

// Icons
import { FaCrown } from 'react-icons/fa'

// Definition props
type RankingItemProps = {
  position: number
  user: string
  challenges: number
  experience: number
}

export default function RankingItem({
  position,
  user,
  challenges,
  experience,
}: RankingItemProps) {
  return (
    <div className={style.rankingItem}>
      <div className={style.position}>{position}</div>
      <div className={style.user}>
        <img
          src={`https://github.com/${user}.png`}
          alt="Foto de perfil"
          loading="lazy"
          className={style.photo}
        />
        <div className={style.infos}>
          <strong>{user}</strong>
          <br />
          <span>
            <FaCrown />
            Nível <strong>10</strong>
          </span>
        </div>
      </div>
      <div className={style.challenges}>
        {challenges} <span>&nbsp;completados</span>
      </div>
      <div className={style.experience}>{experience} xp</div>
    </div>
  )
}
