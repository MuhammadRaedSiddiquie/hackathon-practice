import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

function Card1({ image, title, price, discount, rating }) {
    return (
        <div className='flex flex-col gap-[16px] bg-white min-w-[270px] h-fit pb-2'>
            <div className='w-full min-h-[250px]'>
                <Image src={image} alt={title} width={270} height={250}></Image>
            </div>
            <div className='flex flex-col gap-[16px] w-full h-fit'>
                <h2 className='poppins-semibold text-base text-black'>{title}</h2>
                <div className='flex gap-4'>
                    <h3 className='poppins-semibold text-base text-[#DB4444]'>{price}$</h3>
                    <h3 className='poppins-semibold text-base text-[#898989] line-through'>{discount}$</h3>
                </div>
                <div className='flex gap-2'>
                    <div className='flex gap-[2px]'>
                        <FaStar className='w-[20px] h-[20px] text-[#FFAD33]' />
                        <FaStar className='w-[20px] h-[20px] text-[#FFAD33]' />
                        <FaStar className='w-[20px] h-[20px] text-[#FFAD33]' />
                        <FaStar className='w-[20px] h-[20px] text-[#FFAD33]' />
                        <FaStar className='w-[20px] h-[20px] text-[#FFAD33]' />
                    </div>
                    <p className='poppins-semibold text-black text-sm'>&#40;{rating}&#41;</p>
                </div>
            </div>


        </div>
    )
}

export default Card1
