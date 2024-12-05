import React from 'react'
import Image from 'next/image';

function Arrival() {
  return (
    <section className='w-full h-fit flex items-center justify-center py-8 bg-white items-center'>

            <div className='w-[80%] h-fit flex flex-col items-start gap-[40px]'>
                <div className='h-[110px] w-full flex justify-between items-end'>
                    <div className='w-fit h-full flex flex-col items-start justify-between'>
                        <h4 className='poppins-semibold text-base text-[#DB4444] px-4 py-1.5 border-l-[14px] rounded-[2px] border-[#DB4444]'>Featured</h4>
                        <h1 className='poppins-semibold text-[36px] text-black'>New Arrival</h1>
                    </div>
                </div>
                <div className='w-full h-[600px] flex relative'>
                    <Image className='absolute' src={'/images/slide3.svg'} layout='fill' alt='slide 3'></Image>

                </div>

            </div>
        </section>
  )
}

export default Arrival
