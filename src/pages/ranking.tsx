import Head from 'next/head'
import Layout from '../components/Layout'
import ChallengesProvider from '../contexts/ChallengeContext'

// Style
import style from '../style/scss/pages/ranking.style.module.scss'

export default function Ranking() {
  return (
    <ChallengesProvider>
      <Head>
        <title>Raking | mooven</title>
      </Head>
      <div className={style.ranking}>
        <h1>Essa é a página de hanking</h1>
      </div>
    </ChallengesProvider>
  )
}

Ranking.Layout = Layout
