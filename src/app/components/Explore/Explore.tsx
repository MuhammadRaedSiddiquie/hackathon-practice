import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card1 from '../Card1/Card1';
import Button from '../Button/Button';

function Explore() {
  return (
    <section className='w-full h-fit flex items-center justify-center py-8 bg-white items-center'>

            <div className='w-[80%] h-fit flex flex-col items-start gap-[40px]'>
                <div className='h-[110px] w-full flex justify-between items-end'>
                    <div className='w-full h-full flex gap-[90px] items-center'>
                        <div className='w-fit h-full flex flex-col items-start justify-between'>
                            <h4 className='poppins-semibold text-base text-[#DB4444] px-4 py-1.5 border-l-[14px] rounded-[2px] border-[#DB4444]'>Our Products</h4>
                            <h1 className='poppins-semibold text-[36px] text-black'>Explore Our Products</h1>
                        </div>

                        
                    </div>
                    <div className='w-fit h-full flex items-end justify-center gap-4'>
                        <div className='w-[46px] h-[46px] flex items-center border-2 rounded-[50%] justify-center bg-[#f5f5f5]'><FaArrowLeft /></div>
                        <div className='w-[46px] h-[46px] flex items-center border-2 rounded-[50%] justify-center bg-[#f5f5f5]'><FaArrowRight /></div>
                    </div>
                </div>
                <div className='w-full h-fit gap-[40px] flex flex-col'>
                <div className='w-full h-fit flex items-center justify-start gap-[30px]'>
                    <Card1
                        image={'/images/pro1.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={120}
                        discount={160}
                        rating={88}>
                    </Card1>
                    <Card1
                        image={'/images/pro2.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={960}
                        discount={1160}
                        rating={75}>
                    </Card1>
                    <Card1
                        image={'/images/pro3.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={370}
                        discount={400}
                        rating={99}>
                    </Card1>
                    <Card1
                        image={'/images/pro4.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={375}
                        discount={400}
                        rating={99}>
                    </Card1>
                </div>
                <div className='w-full h-fit flex items-center justify-start gap-[30px]'>
                    <Card1
                        image={'/images/pro5.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={120}
                        discount={160}
                        rating={88}>
                    </Card1>
                    <Card1
                        image={'/images/pro6.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={960}
                        discount={1160}
                        rating={75}>
                    </Card1>
                    <Card1
                        image={'/images/pro7.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={370}
                        discount={400}
                        rating={99}>
                    </Card1>
                    <Card1
                        image={'/images/pro8.svg'}
                        title={'HAVIT HV-G92 Gamepad'}
                        price={375}
                        discount={400}
                        rating={99}>
                    </Card1>
                </div>
                
                </div>
                <div className='w-full flex items-center justify-center h-fit mt-[50px]'>
                    <Button text={'View All Products'}></Button>
                </div>
            </div>
        </section>
  )
}

export default Explore
