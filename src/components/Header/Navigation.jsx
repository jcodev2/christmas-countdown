const Navigation = () => {
  return (
    <nav className='flex w-full max-w-md items-center justify-between gap-x-4'>
      <ul className='flex w-full items-center justify-between text-lg'>
        <li className='bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text font-bold text-transparent'>
          Reminder
          {/* line under element */}
          <div className='h-1 w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500' />
        </li>
        <li>Gifts</li>
        <li>Wishlist</li>
      </ul>
    </nav>
  )
}

export default Navigation
