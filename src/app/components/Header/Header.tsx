import React from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <nav className='w-full h-fit flex flex-col items-center gap-[34px] justify-center pb-[12px] border-b-[1px] border-[#e1e1e1]'>
            <div className='w-full h-[48px] bg-black flex items-center justify-center relative'>
                <div className='w-[60%] h-full flex items-center justify-center'>
                    <div className='flex gap-2'>
                        <p className='text-white text-sm poppins-regular xl:text-lg xxl:text-xl'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <h3 className='text-white text-sm font-bold poppins-regular xl:text-lg xxl:text-xl'>Shop now</h3>
                    </div>
                    <select className='bg-black text-white text-sm poppins-regular absolute right-[150px] xl:text-lg xxl:text-xl' name="lang" >
                        <option value="eng">English</option>
                    </select>
                </div>
            </div>
            <div className='w-[80%] h-[38px] flex justify-between items-center'>
                <div className='w-[58%] h-full flex items-center justify-between'>
                <div className='relative w-[120px] h-full'>
                    <Image className='absolute' src={"/images/logo.svg"} layout={'fill'} alt={'logo'}></Image>
                </div>
                <ul className='flex w-[67%] h-full items-center justify-between'>
                    <li className='text-sm text-black poppins-regular xl:text-xl xxl:text-2xl'>Home</li>
                    <li className='text-sm text-black poppins-regular xl:text-xl xxl:text-2xl'>Contact</li>
                    <li className='text-sm text-black poppins-regular xl:text-xl xxl:text-2xl'>About</li>
                    <li className='text-sm text-black poppins-regular xl:text-xl xxl:text-2xl'>Signup</li>
                </ul>
                </div>
                <div className='w-[36%] h-full flex justify-between items-center'>
                <div className='h-full w-fit flex  bg-[#f5f5f5] items-center justify-center  rounded-[8px] gap-[10px] py-[7px] px-[10px]'>
                    <input className='w-[240px] bg-[#f5f5f5] h-full text-black pl-[15px] text-sm poppins-regular' type="text" placeholder='What are you looking for?' />
                    <Image src={'/images/search.svg'} alt='cart logo' width={25} height={25}></Image>
                </div>
                <div className='flex items-center justify-between gap-[14px]'>
                    <Image src={'/images/search.svg'} width={32} height={32} alt='logo'></Image>
                    <Image src={'/images/cart.svg'} width={32} height={32} alt='logo'></Image>

                </div>
                </div>
            </div>
        </nav>
    )
}
