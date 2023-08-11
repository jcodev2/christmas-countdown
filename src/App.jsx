import { Countdown } from './components/Countdown'
import { Header } from './components/Header'
import { Quotes } from './components/Quotes'

const date = new Date('December 25 2023, 00:00:00')

export default function App() {
  return (
    <div className='relative bg-[url("/hero-image.jpg")] bg-cover bg-center '>
      <Header />

      <div className='absolute inset-0 bg-black/60' />

      <main className='container mx-auto flex min-h-[calc(100vh-5rem)] flex-col gap-y-4 overflow-hidden pt-12'>
        <div className='relative z-10 flex flex-col items-center justify-center gap-y-4'>
          <Countdown targetDate={date} />

          <Quotes />
        </div>
      </main>
    </div>
  )
}
