import React from 'react'
import { SlEnergy } from "react-icons/sl";

const Section = () => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 rounded-2xl shadow-lg p-6 flex items-center justify-between select-none">
      
      <div className="flex items-center gap-4">
        <SlEnergy className="text-yellow-400 text-4xl drop-shadow-md" />
        <div className="text-white font-semibold text-lg tracking-wide">
          Energy: <span className="text-yellow-300 font-bold">2000 / 2000</span>
        </div>
      </div>

      <button 
        className="bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-500 transition-shadow shadow-md"
        title="Activate Boost"
      >
        Boost
      </button>

    </div>
  )
}

export default Section