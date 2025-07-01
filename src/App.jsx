import React from 'react'
import Nav from './components/Nav'
import Phone from './components/Phone'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-[450px] h-[800px] bg-[#2C2F35] rounded-4xl m-auto mt-10'>
      <h1 className='text-[16px] pt-[28px] font-bold text-center text-white'>Hamster Combat</h1>
      <Nav />
      <div className='flex justify-center mt-10 flex-col'>
        <Phone />
      </div>
      <Footer />
      </div>
  )
}

export default App
