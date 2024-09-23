import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Buy = () => {

    const prodactDataSlice = useSelector((state)=>state.forUser.getUserData)

    console.log(prodactDataSlice)

// qantity selector


  return (
    <>
    <div className=" buyMainDiv w-full ">
          <div className="buyDivOne w-full mt-5 mb-5 flex-wrap gap-5">
            <div className=" buyDivTow p-2 w-full h-[900px] bg-[#ffa915] ">
              <div className="buyphoto w-full h-[400px] bg-[#ccc]"> 
                <img src={prodactDataSlice?.image_url} alt={prodactDataSlice?.product_name} />
                 </div>
              <h2 className="buyDivTowTextOne text-[25px] font-medium ">
                {prodactDataSlice?.product_name}
              </h2>
              <p className="buyDivTowTextTow">
                {" "}
                {prodactDataSlice?.description}{" "}
              </p>
                <p className='buyDivTowTextPrice text-[50px] font-medium'> Price: <span className='text-white'>{prodactDataSlice?.price} </span></p>
              <div className="buyDivTowButto flex gap-4 mt-10 ">
                <button className="buyDivTowButtonTow hover:scale-110 active:scale-95 transition-all p-2 rounded-lg bg-[#fff] ">
                 <Link to='/'> Continue Shopping</Link>
                </button>
                <button className="buyDivTowButtonOne hover:scale-110 active:scale-95 transition-all w-[100px] h-[40px] text-white rounded-lg bg-slate-700 ">
                  Buy
                </button>
                {/* quntity selector */}
                <div className="buyDivTowButtoQuntety flex gap-4 ">
                    <button className='buyDivTowButtoMinus hover:scale-110 active:scale-95 transition-all w-[100px] h-[40px] text-white rounded-lg bg-slate-700 '>-</button>
                    <div className="buyDivTowButtoQuntetyNumber flex items-center text-[30px] ">
                        <p>0</p>
                    </div>
                    <button className='buyDivTowButtoPlus hover:scale-110 active:scale-95 transition-all w-[100px] h-[40px] text-white rounded-lg bg-slate-700 '>+</button>
                </div>
                {/* quntity selector */}
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Buy
