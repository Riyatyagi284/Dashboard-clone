import React , {useState} from 'react'
import {AiOutlineSync} from "react-icons/ai"

const MarketAnalysis = () => {

  const [input, setInput] = useState("")

  const inputHandler = (event) => {
      setInput(event.target.value);
  };

  return (
    <>
    <div className="container-fluid market">
      <div className='Market-Analysis'>
            <p>Market Analysis</p>
            <AiOutlineSync size={22}/>
      </div>
      <div className='search'>
      <input type="text" value={input} onChange={inputHandler} placeholder="Search Event" />
      </div>
    </div>
    </>
  )
}

export default MarketAnalysis