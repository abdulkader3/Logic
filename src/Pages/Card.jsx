import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ProdactSlice } from '../Slices/SliceUser'


const Card = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get the cart data directly from Redux state
    const data = useSelector((state) => state.forUser.getUserDataCard);

    const buttonForBuy = (Prodact) => {
        dispatch(ProdactSlice(Prodact));
        navigate('/buy');
    };

    return (
        <>
            <div className="mainCard w-full flex flex-col h-auto items-center">
                {data?.map((items) => (
                    <div className="carddivone w-[900px] mb-1 rounded-lg flex justify-between h-[100px] bg-[#ffcc34] p-5" key={items.id}>
                        <div className="carddivthree flex justify-start items-center gap-2">
                            <div className="photo w-full justify-center">
                                <img className="w-[90px] h-[90px]" src={items?.image_url} alt={items?.product_name} />
                            </div>
                            <h2 className="text-[18px]">{items?.product_name}</h2>
                        </div>
                        <div className="carddivtow flex items-center gap-2 justify-end">
                            <p className="text-[25px]">Price <span className="text-[#fff]">{items?.price}</span></p>
                            <button onClick={() => buttonForBuy(items)} className="hover:scale-110 active:scale-95 transition-all w-[100px] h-[40px] text-white rounded-lg bg-slate-700">Buy</button>
                        </div>
                    </div>
                ))}

                <div className="w-full h-auto flex justify-center">
                    <button className="hover:scale-110 active:scale-95 transition-all w-[100px] h-[40px] text-white rounded-lg bg-slate-700">Buy All</button>
                </div>
            </div>
        </>
    );
};

export default Card;

