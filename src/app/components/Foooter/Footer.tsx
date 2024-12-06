import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='w-full h-[440px] bg-black flex items-center justify-center relative'>
      <div className='w-[80%] h-fit flex items-start justify-between'>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h1 className='text-white font-bold text-[24px] xl:text-3xl xxl:text-4xl'>Exclusive</h1>
          <h2 className='text-lg text-white poppins-semibold xl:text-xl xxl:text-2xl'>Subscribe</h2>
          <p className='text-white text-sm poppins-regular xl:text-lg xxl:text-xl'>Get 10% off your first order</p>
          <div className='w-[200px] h-[48px] flex border-white bg-black border-[1px] rounded-[8px] py-2 px-2'>
            <input className='w-full h-full w-full text-sm pl-[12px] bg-black text-[#f5f5f5] poppins-regular xl:text-lg xxl:text-xl' type="text" placeholder='Enter your email' />
            <div className='w-fit h-full flex items-center justify-center'>
              <Image src={'/images/arrow.svg'} width={20} height={22} alt='logo'></Image>
            </div>
          </div>

        </div>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h2 className='text-lg text-white poppins-semibold xl:text-xl xxl:text-2xl'>Support</h2>
          <ul className='w-full h-fit flex flex-col items-start justify-center gap-[16px]'>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>exclusive@gmail.com</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>+88015-88888-9999</li>
          </ul>
        </div>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h2 className='text-lg text-white poppins-semibold xl:text-xl xxl:text-2xl'>Account</h2>
          <ul className='w-full h-fit  flex flex-col items-start justify-center gap-[16px]'>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>My Account</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>Login / Register</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>Cart</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>Wishlist</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>Shop</li>
          </ul>
        </div>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h2 className='text-lg text-white poppins-semibold xl:text-xl xxl:text-2xl'>Quick Link</h2>
          <ul className='w-full h-fit  flex flex-col items-start justify-center gap-[16px]'>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>Privacy Policy</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>Terms Of Use</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>FAQ</li>
            <li className='poppins-regular text-white text-sm xl:text-lg xxl:text-xl'>Contact</li>
          </ul>
        </div>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h2 className='text-lg text-white poppins-semibold xl:text-xl xxl:text-2xl'>Download App</h2>
          <p className='text-white text-[12px] poppins-regular xl:text-base xxl:text-xl'>Save $3 with App New User Only</p>
          <div className='w-full h-[80px] flex items-center justify-start'>
            <div className='w-[80%] h-[70px] relative'>
              <Image className='abolute' src={'/images/QrCode.svg'} layout='fill' alt='logo'></Image>
            </div>
            <div className='w-full h-full flex flex-col items-start justify-between gap-[2px]'>
              <div className='w-full h-[50%] relative'>

                <Image className='abolute' src={'/images/GooglePlay.svg'} layout='fill' alt='logo'></Image>
              </div>
              <div className='w-full h-[50%] relative'>
                <Image className='abolute' src={'/images/AppStore.svg'} layout='fill' alt='logo'></Image>
              </div>
            </div>

          </div>
            <div className='w-fit h-[24px] gap-[20px] flex justify-start items-start'>
              <FaFacebook className='text-white text-[22px] xl:text-[28px] xxl:text-[34px]' />
              <FaTwitter className='text-white text-[22px] xl:text-[28px] xxl:text-[34px]' />
              <FaLinkedin className='text-white text-[22px] xl:text-[28px] xxl:text-[34px]' />
              <FaInstagram className='text-white text-[22px] xl:text-[28px] xxl:text-[34px]' />
            </div>
        </div>
      </div>
      <p className='w-full text-sm text-[#898989] border-[#898989] border-t-[1px] py-[14px] text-center absolute bottom-0 xl:text-lg xxl:text-xl'>@Copyright Rimel 2022. All right reserved</p>

    </footer>
  )
}
