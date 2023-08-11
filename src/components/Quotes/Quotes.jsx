import { useEffect, useState } from 'react'
import christmasQuotes from './constants'

const Quotes = () => {
  const [quotes] = useState(christmasQuotes)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  console.log(quotes)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => {
        if (prevIndex === quotes.length - 1) {
          return 0
        } else {
          return prevIndex + 1
        }
      })
    }, 5000)

    return () => clearInterval(intervalId)
  }, [quotes.length])

  return (
    <p
      className='mx-auto max-w-2xl pt-4 text-center text-lg font-semibold text-zinc-300'
      key={currentQuoteIndex}
    >
      {quotes[currentQuoteIndex].quote} - {quotes[currentQuoteIndex].author}
    </p>
  )
}

export default Quotes
