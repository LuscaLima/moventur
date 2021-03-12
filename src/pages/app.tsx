// Components
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import CompleteChallenges from '../components/CompleteChallenges'
import Countdown from '../components/Countdown'
import ChallengeBox from '../components/ChallengeBox'
import CountdownProvider from '../contexts/CountdownContext'
import ChallengesProvider from '../contexts/ChallengeContext'

// Style
import style from '../style/scss/pages/home.style.module.scss'

// Props definition
type HomeProps = {
  level: number
  currentExperience: number
  completedChallenges: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider {...props}>
      <Head>
        <title>Pomodoro | mooven</title>
      </Head>

      <div className="container d-flex flex-column px-md-5 px-4">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-sm-12">
            <ExperienceBar />
          </div>
        </div>
        <div className="row my-auto gx-5">
          <CountdownProvider>
            <div className="col-md-5 offset-md-1 pe-md-5 col-sm-12">
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>
            <div className="col-md-5 ps-md-5 col-sm-12 my-4 my-md-0">
              <ChallengeBox />
            </div>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  )
}

Home.Layout = Layout

export const getServerSideProps: GetServerSideProps = async context => {
  const { level, currentExperience, completedChallenges } = context.req.cookies

  return {
    props: {
      level: parseInt(level) || 0,
      currentExperience: parseInt(currentExperience) || 0,
      completedChallenges: parseInt(completedChallenges) || 0,
    },
  }
}
