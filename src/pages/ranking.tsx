import Head from 'next/head'
import Layout from '../components/Layout'
import RankingItem from '../components/RankingItem'
import ChallengesProvider from '../contexts/ChallengeContext'

// Style
import style from '../style/scss/pages/ranking.style.module.scss'

export default function Ranking() {
  const ranking = [
    {
      user: 'luscalima',
      challenges: 122,
      experience: 1500000,
    },
    {
      user: 'kai',
      challenges: 22,
      experience: 150,
    },
    {
      user: 'chilli',
      challenges: 36,
      experience: 500,
    },
  ]

  return (
    <ChallengesProvider>
      <Head>
        <title>Raking | mooven</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1 className="my-4">Ranking</h1>

            <div className={`${style.legend} my-3`}>
              <span className={style.position}>Posição</span>
              <span className={style.user}>Usuário</span>
              <span className={style.challenges}>Desafios</span>
              <span className={style.experience}>Experiência</span>
            </div>

            {ranking.map((element, i) => (
              <RankingItem position={i + 1} key={i} {...element} />
            ))}
          </div>
        </div>
      </div>
    </ChallengesProvider>
  )
}

Ranking.Layout = Layout
