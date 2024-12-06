import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card1 from '../Card1/Card1';
import Button from '../Button/Button';

function Flash() {
    return (
        <section className='w-full h-fit flex items-center justify-center py-8 bg-white items-center'>

            <div className='w-[80%] h-fit flex flex-col items-start gap-[40px]'>
                <div className='h-[110px] w-full flex justify-between items-end'>
                    <div className='w-full h-full flex gap-[90px] items-center'>
                        <div className='w-fit h-full flex flex-col items-start justify-between'>
                            <h4 className='poppins-semibold text-base text-[#DB4444] px-4 py-1.5 border-l-[14px] rounded-[2px] border-[#DB4444] xl:text-xl xxl:text-2xl'>Today</h4>
                            <h1 className='poppins-semibold text-[36px] text-black xl:text-[42px] xxl:text-5xl'>Flash Sales</h1>
                        </div>

                        <div className='w-fit h-full flex items-end justify-end'>
                            <div className='flex flex-col'>
                                <h5 className='poppins-medium text-[12px] leading-[0.25rem] text-black'>Days</h5>
                                <h2 className='poppins-bold text-black text-[32px]'>03</h2>
                            </div>
                            <div className='flex flex-col px-2'>
                                <h2 className='poppins-bold text-[#DB4444] text-[32px]'>:</h2>
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='poppins-medium text-[12px] leading-[0.25rem] text-black'>Hours</h5>
                                <h2 className='poppins-bold text-black text-[32px]'>23</h2>
                            </div>
                            <div className='flex flex-col px-2'>
                                <h2 className='poppins-bold text-[#DB4444] text-[32px]'>:</h2>
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='poppins-medium text-[12px] leading-[0.25rem] text-black'>Minutes</h5>
                                <h2 className='poppins-bold text-black text-[32px]'>19</h2>
                            </div>
                            <div className='flex flex-col px-2'>
                                <h2 className='poppins-bold text-[#DB4444] text-[32px]'>:</h2>
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='poppins-medium text-[12px] leading-[0.25rem] text-black'>Seconds</h5>
                                <h2 className='poppins-bold text-black text-[32px]'>56</h2>
                            </div>

                        </div>
                    </div>
                    <div className='w-fit h-full flex items-end justify-center gap-4'>
                        <div className='w-[46px] h-[46px] flex items-center border-2 rounded-[50%] justify-center bg-[#f5f5f5]'><FaArrowLeft /></div>
                        <div className='w-[46px] h-[46px] flex items-center border-2 rounded-[50%] justify-center bg-[#f5f5f5]'><FaArrowRight /></div>
                    </div>
                </div>
                <div className='w-full h-fit flex items-center justify-start gap-[30px] overflow-x-hidden'>
                    <Card1
                        image={'/images/image1.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={120}
                        discount={160}
                        rating={88}>
                    </Card1>
                    <Card1
                        image={'/images/image2.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={960}
                        discount={1160}
                        rating={75}>
                    </Card1>
                    <Card1
                        image={'/images/image3.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={370}
                        discount={400}
                        rating={99}>
                    </Card1>
                    <Card1
                        image={'/images/image4.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={375}
                        discount={400}
                        rating={99}>
                    </Card1>
                    <Card1
                        image={'/images/image4.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={120}
                        discount={160}
                        rating={99}>
                    </Card1>
                </div>
                <div className='w-full flex items-center justify-center h-fit mt-[50px]'>
                    <Button text={'View All Products'}></Button>
                </div>
            </div>
        </section>
    )
}

export default Flash
