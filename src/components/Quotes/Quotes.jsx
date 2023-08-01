import { useEffect, useState } from 'react'
import christmasQuotes from './constants'

const Quotes = () => {
  const [quotes] = useState(christmasQuotes)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => {
        const newIndex = Math.floor(Math.random() * quotes.length)
        return newIndex === prevIndex
          ? (newIndex + 1) % quotes.length
          : newIndex
      })
    }, 24 * 60 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [quotes.length])

  return (
    <p
      className='pt-4 text-sm font-semibold text-zinc-200'
      key={currentQuoteIndex}
    >
      {quotes[currentQuoteIndex]}
    </p>
  )
}

export default Quotes
