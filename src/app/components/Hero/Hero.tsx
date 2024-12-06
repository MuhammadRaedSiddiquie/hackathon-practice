import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className='w-full h-[72vh] bg-white flex items-start justify-center'>
<div className='w-[80%] h-full flex items-start justify-between'>
    <div className='w-[25%] h-fit bg-white border-r-2 border-[#e1e1e1]'>
        <ul className='w-full h-fit flex gap-[16px] flex-col items-start mt-[26px]'>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Woman&apos;s Fashion</li>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Man&apos;s Fashion</li>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Electronics</li>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Home & Lifestyle</li>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Medicine</li>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Sport & Outdoor</li>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Baby&apos;s Toy</li>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Groceries & Pet</li>
            <li className='poppins-medium text-base text-black xl:text-xl xxl:text-2xl'>Health & Beauty</li>
        </ul>
    </div>
    <div className='w-[75%] h-full bg-white flex items-start justify-start pl-[26px]'>
        <div className='w-full h-[80%] relative'>
            <Image className='absolute' src={'/images/slide1.svg'} layout='fill' alt='slider 1'></Image>
        </div>
    </div>
</div>
    </section>
  )
}

export default Hero
