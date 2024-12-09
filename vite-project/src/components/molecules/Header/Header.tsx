import React from 'react'

const Header = () => {
  return (
    <div className=" flex  justify-between items-center w-full h-[100px] p-[80px]" >
        <div className="flex"><img className="w-[166px] h-[49px] " src="logo.svg" alt="Logo" />
        </div>
        <div className="flex w-[300px] justify-between text-[#07043B] font-raleway text-[16px]">
        <div>Features</div>
        <div>Team</div>
        <div>Sign In</div>
        </div>
        </div>
  )
}

export default Header