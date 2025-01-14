import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card1 from '../Card1/Card1';

function Selling() {
    return (
        <section className='w-full h-fit flex items-center justify-center py-8 bg-white items-center'>

            <div className='w-[80%] h-fit flex flex-col items-start gap-[40px]'>
                <div className='h-[110px] w-full flex justify-between items-end'>
                    <div className='w-fit h-full flex flex-col items-start justify-between'>
                        <h4 className='poppins-semibold text-base text-[#DB4444] px-4 py-1.5 border-l-[14px] rounded-[2px] border-[#DB4444] xl:text-xl xxl:text-2xl'>This Month</h4>
                        <h1 className='poppins-semibold text-[36px] text-black xl:text-[42px] xxl:text-5xl'>Best Selling Products</h1>
                    </div>
                    <div className='w-fit h-full flex items-end justify-center gap-4'>
                        <div className='w-[46px] h-[46px] flex items-center border-2 rounded-[50%] justify-center bg-[#f5f5f5]'><FaArrowLeft /></div>
                        <div className='w-[46px] h-[46px] flex items-center border-2 rounded-[50%] justify-center bg-[#f5f5f5]'><FaArrowRight /></div>
                    </div>
                </div>
                <div className='w-full h-fit flex items-center justify-center gap-[30px]'>
                    <Card1
                        image={'/images/Cart-1.svg'}
                        title={'The North Coat'}
                        price={260}
                        discount={360}
                        rating={65}>
                    </Card1>
                    <Card1
                        image={'/images/Cart-2.svg'}
                        title={'Gucci Bag'}
                        price={960}
                        discount={1160}
                        rating={65}>
                    </Card1>
                    <Card1
                        image={'/images/Cart-3.svg'}
                        title={'RGB Liquid CPU Cooler'}
                        price={160}
                        discount={170}
                        rating={65}>
                    </Card1>
                    <Card1
                        image={'/images/Cart-4.svg'}
                        title={'Small Bookself'}
                        price={120}
                        discount={130}
                        rating={65}>
                    </Card1>
                </div>
               


            </div>
        </section>
    )
}

export default Selling
