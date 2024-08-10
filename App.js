import React from 'react'
import Products from './component/Products.js'
import Header from './component/Header.js'
const App = () => {
  return (
    <div>
      <Header count={2}/>
      
      <Products/>
      <button className="px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-black-300 mx-auto block "> Next </button> 
      </div>
     
  )
}

export default App
