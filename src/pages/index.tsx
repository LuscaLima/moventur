import Head from 'next/head'
import MButton from '../components/Button'

// Style
import style from '../style/scss/pages/login.style.module.scss'

// Icons
import { FaGithub } from 'react-icons/fa'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | mooven</title>
      </Head>
      <main className={style.login}>
        <div className={`container-fluid ${style.container}`}>
          <div className={`row ${style.row}`}>
            <div className="col-md-5 offset-md-7 align-self-center d-flex flex-column justify-content-center">
              <div className={`mb-5 ${style.brand}`}>
                <h1>mooven</h1>
              </div>
              <p className="mb-3">Bem-vindo</p>
              <div className="mx-auto">
                <MButton theme="dark">
                  <FaGithub size="30" />
                  Login com Github
                </MButton>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
