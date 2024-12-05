import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='w-full h-[440px] bg-black flex items-center justify-center relative'>
      <div className='w-[80%] h-fit flex items-start justify-between'>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h1 className='text-white font-bold text-[24px]'>Exclusive</h1>
          <h2 className='text-lg text-white poppins-regular'>Subscribe</h2>
          <p className='text-white text-sm poppins-regular'>Get 10% off your first order</p>
          <div className='w-[200px] h-[48px] flex border-white bg-black border-[1px] rounded-[8px] py-2 px-2'>
            <input className='w-full h-full w-full text-sm pl-[12px] bg-black text-[#f5f5f5] poppins-regular' type="text" placeholder='Enter your email' />
            <div className='w-fit h-full flex items-center justify-center'>
              <Image src={'/images/arrow.svg'} width={20} height={22} alt='logo'></Image>
            </div>
          </div>

        </div>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h2 className='text-lg text-white poppins-regular'>Support</h2>
          <ul className='w-full h-fit flex flex-col items-start justify-center gap-[16px]'>
            <li className='poppins-regular text-white text-sm'>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</li>
            <li className='poppins-regular text-white text-sm'>exclusive@gmail.com</li>
            <li className='poppins-regular text-white text-sm'>+88015-88888-9999</li>
          </ul>
        </div>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h2 className='text-lg text-white poppins-regular'>Account</h2>
          <ul className='w-full h-fit  flex flex-col items-start justify-center gap-[16px]'>
            <li className='poppins-regular text-white text-sm'>My Account</li>
            <li className='poppins-regular text-white text-sm'>Login / Register</li>
            <li className='poppins-regular text-white text-sm'>Cart</li>
            <li className='poppins-regular text-white text-sm'>Wishlist</li>
            <li className='poppins-regular text-white text-sm'>Shop</li>
          </ul>
        </div>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h2 className='text-lg text-white poppins-regular'>Quick Link</h2>
          <ul className='w-full h-fit  flex flex-col items-start justify-center gap-[16px]'>
            <li className='poppins-regular text-white text-sm'>Privacy Policy</li>
            <li className='poppins-regular text-white text-sm'>Terms Of Use</li>
            <li className='poppins-regular text-white text-sm'>FAQ</li>
            <li className='poppins-regular text-white text-sm'>Contact</li>
          </ul>
        </div>
        <div className='w-fit h-fit flex flex-col items-start justify-center gap-[24px]'>
          <h2 className='text-lg text-white poppins-regular'>Download App</h2>
          <p className='text-white text-[12px] poppins-regular'>Save $3 with App New User Only</p>
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
              <FaFacebook className='text-white text-[22px]' />
              <FaTwitter className='text-white text-[22px]' />
              <FaLinkedin className='text-white text-[22px]' />
              <FaInstagram className='text-white text-[22px]' />
            </div>
        </div>
      </div>
      <p className='w-full text-sm text-[#898989] border-[#898989] border-t-[1px] py-[14px] text-center absolute bottom-0'>@Copyright Rimel 2022. All right reserved</p>

    </footer>
  )
}
