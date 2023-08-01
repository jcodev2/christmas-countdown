import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const CountDown = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(targetDate - Date.now())
  const [countdownEnded, setCountdownEnded] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRemainingTime = targetDate - Date.now()
      setRemainingTime(newRemainingTime)

      if (newRemainingTime <= 0) {
        setCountdownEnded(true)
        clearInterval(intervalId)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60)
  const seconds = Math.floor((remainingTime / 1000) % 60)

  // create a function that check if the number is less than 10 and add a 0 in front of it
  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number
  }

  return (
    <div className='flex flex-col items-center justify-center gap-x-16'>
      {countdownEnded ? (
        <div className='flex flex-col items-center justify-center gap-y-8'>
          <Confetti
            // center in the middle of the screen
            width={window.innerWidth}
            height={window.innerHeight}
          />

          <h1 className='text-7xl font-bold text-zinc-300'>
            Merry Christmas and Happy New Year!
          </h1>

          <img
            src='/christmas.svg'
            alt='Christmas Tree'
            className='h-96 w-96'
          />
        </div>
      ) : (
        <>
          <h1 className='pb-4 text-center text-2xl font-semibold text-zinc-300'>
            ROAD TO CHRISTMAS
          </h1>

          <div className='flex items-center justify-center gap-x-12'>
            <div className='flex flex-col items-center justify-center gap-y-2'>
              <h1 className='text-9xl font-bold text-zinc-300'>
                {formatNumber(days)}
              </h1>
              <h2 className='text-2xl font-semibold text-zinc-300'>Days</h2>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-2'>
              <h1 className='text-9xl font-bold text-zinc-300'>
                {formatNumber(hours)}
              </h1>
              <h2 className='text-2xl font-semibold text-zinc-300'>Hours</h2>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-2'>
              <h1 className='text-9xl font-bold text-zinc-300'>
                {formatNumber(minutes)}
              </h1>
              <h2 className='text-2xl font-semibold text-zinc-300'>Minutes</h2>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-2'>
              <h1 className='text-9xl font-bold text-zinc-300'>
                {formatNumber(seconds)}
              </h1>
              <h2 className='text-2xl font-semibold text-zinc-300'>Seconds</h2>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CountDown
