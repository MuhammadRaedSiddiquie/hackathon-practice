import React from 'react'

function Button({text}:{text:string}) {
  return (
    <button className=' px-[48px] py-[16px] bg-[#DB4444] text-white text-base poppins-medium xl:text-xl xxl:text-2xl'>{text}</button>
  )
}

export default Button
