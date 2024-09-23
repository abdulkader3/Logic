import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { data } from "autoprefixer";
import ProdactData from "../Locac data/ProdactData";
import { useDispatch } from "react-redux";
import { ProdactSlice } from "../Slices/SliceUser";


const Home = () => {

    // custom state
    const [Prodatct , upProdact] = useState(ProdactData)

    const dispatch = useDispatch()
    const naviget  = useNavigate()



  // firebase database

  //   const db = getDatabase();

  // read data frome database

//   useEffect(() => {
//     const starCountRef = ref(db, "JSONdata/");
//     let bag = []
//     onValue(starCountRef, (snapshot) => {
//       snapshot.forEach((item)=>{
//         bag.push({...item.val() , key:item.key})
//       })
//     });
//     upProdact(bag)
//   }, []);







// button funtion
const buttonForBuy = (Prodact)=>{
 dispatch(ProdactSlice(Prodact))

// localStorage.setItem('prodact' , JSON.stringify(Prodact))
 naviget('/buy')
}







  return (
    <>
      <div className="main w-full h-full ">
        <div className="divOne w-full h-[400px] bg-[#ff5e14] "></div>

        <div className=" secondMainDiv w-full flex justify-center ">
          <div className="seconDivOne flex justify-center mt-5 mb-5 flex-wrap gap-5">

            {
                Prodatct.map((AllProdact)=>(
                    <div  className=" secondDivTow p-2 w-[300px] h-[600px] bg-[#ffa915] ">
                    <div className="photo w-full h-[200px] bg-[#ccc]">
                        <img src={AllProdact?.image_url} alt={AllProdact?.product_name} />
                    </div>
                    <h2 className="secondDivTowTextOne text-[20px] font-medium ">
                       {AllProdact?.product_name}
                    </h2>
                    <p className="secondDivTowTextTow">
                      {" "}
                      {AllProdact?.description}{" "}
                    </p>
                    <p className="secondDivTowTextPrice text-[30px] font-medium">
                      {" "}
                      Price: <span className="text-white">{AllProdact?.price}</span>
                    </p>
      
                    <div className="secondDivTowButto flex gap-4 mt-10 ">
                      <button className="secondDivTowButtonTow hover:scale-110 active:scale-95 transition-all w-[100px] h-[40px] rounded-lg bg-[#fff] ">
                        Add to card
                      </button>
                      <button
                      onClick={()=>buttonForBuy(AllProdact)}
                       className="secondDivTowButtonOne hover:scale-110 active:scale-95 transition-all w-[100px] h-[40px] text-white rounded-lg bg-slate-700 ">
                        <Link to="/buy"> Buy </Link>
                      </button>
                    </div>
                  </div>
                ))
            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
