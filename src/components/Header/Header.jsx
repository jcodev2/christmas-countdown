import Navigation from './Navigation'

const Header = () => {
  return (
    <header className='relative z-40 mx-auto flex w-full max-w-7xl items-center justify-between gap-x-4 p-4'>
      <h2 className='text-clip text-lg font-bold text-zinc-50'>Christmas</h2>

      <Navigation />

      <button className='rounded-full bg-gradient-to-tr from-orange-500 to-red-500 px-4 py-2 text-base font-semibold text-zinc-50'>
        Remind me
      </button>
    </header>
  )
}

export default Header
