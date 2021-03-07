import { useContext, useEffect, useState } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext'
import MButton from '../Button'

// Style
import style from './style.module.scss'

// Icons
import { FaCheck, FaPlay, FaTimes } from 'react-icons/fa'

export default function Countdown() {
  const { start, reset, isActive, hasFinished, minutes, seconds } = useContext(
    CountdownContext
  )

  const [minLeft, minRight] = minutes.toString().padStart(2, '0').split('')
  const [secLeft, secRight] = seconds.toString().padStart(2, '0').split('')

  return (
    <>
      <div className={`${style.countdown} mb-2 mb-md-4`}>
        <div className={style.minutes}>
          <span>{minLeft}</span>
          <span>{minRight}</span>
        </div>
        <span>:</span>
        <div className={style.seconds}>
          <span>{secLeft}</span>
          <span>{secRight}</span>
        </div>
      </div>
      {isActive ? (
        <MButton theme="red" size="large" block onClick={reset}>
          Abandonar ciclo
          <FaTimes />
        </MButton>
      ) : hasFinished ? (
        <MButton theme="white" size="large" block>
          Ciclo encerrado
          <FaCheck color="#67dd0d" />
        </MButton>
      ) : (
        <MButton theme="orange" size="large" block onClick={start}>
          Iniciar ciclo
          <FaPlay />
        </MButton>
      )}
    </>
  )
}
