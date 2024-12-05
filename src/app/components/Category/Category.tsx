import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

function Category() {
    return (
        <section className='w-full h-fit flex items-center justify-center py-8 bg-[#f5f5f5] items-center'>

            <div className='w-[80%] h-fit flex flex-col items-start gap-[40px]'>
                <div className='h-[110px] w-full flex justify-between items-end'>
                    <div className='w-fit h-full flex flex-col items-start justify-between'>
                        <h4 className='poppins-semibold text-base text-[#DB4444] px-4 py-1.5 border-l-[14px] rounded-[2px] border-[#DB4444]'>Categories</h4>
                        <h1 className='poppins-semibold text-[36px] text-black'>Explore By Category</h1>
                    </div>
                    <div className='w-fit h-full flex items-end justify-center gap-4'>
                        <div className='w-[46px] h-[46px] flex items-center border-2 rounded-[50%] justify-center bg-[#f5f5f5]'><FaArrowLeft /></div>
                        <div className='w-[46px] h-[46px] flex items-center border-2 rounded-[50%] justify-center bg-[#f5f5f5]'><FaArrowRight /></div>
                    </div>
                </div>
                <div className='w-full h-fit flex items-center justify-between'>
                    <div className='w-[170px] h-[150px] relative'><Image className='absolute' src={'/images/icon1.svg'} layout='fill' alt='logo'></Image></div>
                    <div className='w-[170px] h-[150px] relative'><Image className='absolute' src={'/images/icon2.svg'} layout='fill' alt='logo'></Image></div>
                    <div className='w-[170px] h-[150px] relative'><Image className='absolute' src={'/images/icon3.svg'} layout='fill' alt='logo'></Image></div>
                    <div className='w-[170px] h-[150px] relative'><Image className='absolute' src={'/images/icon4.svg'} layout='fill' alt='logo'></Image></div>
                    <div className='w-[170px] h-[150px] relative'><Image className='absolute' src={'/images/icon5.svg'} layout='fill' alt='logo'></Image></div>
                    <div className='w-[170px] h-[150px] relative'><Image className='absolute' src={'/images/icon6.svg'} layout='fill' alt='logo'></Image></div>

                </div>

            </div>
        </section>
    )
}

export default Category
