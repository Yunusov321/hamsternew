import React from 'react'

const Exchange = ({ onClose }) => {
  return (
    <div className='w-[350px] h-[550px] bg-gray-900 rounded-3xl m-auto relative bottom-[600px] shadow-md text-white p-4'>
      <div className="flex justify-end">
        <button onClick={onClose} className="text-xl">✖</button>
      </div>

      <h2 className="text-lg font-bold mb-4">Exchange</h2>

      <div className="space-y-4">
        <ExchangeItem title="Top 10 cmc pairs" profit="120" price="192" />
        <ExchangeItem title="Meme coins" profit="376" price="2.3K" />
        <ExchangeItem title="Margin trading x10" profit="997" price="11.2K" />
      </div>
    </div>
)}

const ExchangeItem = ({ title, profit, price }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow">
    <h3 className="text-md font-semibold">{title}</h3>
    <p>Profit: <span className="text-yellow-400">🪙 {profit}</span></p>
    <div className="text-sm text-gray-400">lvl 1</div>
    <div className="text-yellow-300">🪙 {price}</div>
  </div>
)

export default Exchange
