import React from 'react'

const Content2 = () => {
    return (
        <div className=" flex flex-row pt-[200px] pl-[80px] bg-[url('background.svg')] bg-cover  w-full h-[900px] bg-no-repeat">
            <div className='flex gap-6 flex-col w-[1/2]'>
                <div className="text-[#07043B] font-raleway text-[40px] font-bold leading-normal">
                    Stay productive, wherever you are</div>
                <div className="text-[#07043B] w-[529px] font-open-sans text-base font-normal leading-6">
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</div>
                <div className="text-[#07043B] w-[529px]  font-open-sans text-base font-normal leading-6">
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</div>
                <div className="text-[#3DA08F] flex items-center gap-3 font-open-sans text-base font-normal leading-normal">

                    See how Fylo works <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g filter="url(#filter0_d_0_126)">
                            <circle cx="8" cy="8" r="6" fill="#3DA08F" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58235 6L8.21938 6.35L9.67123 7.75H5.33333V8.25H9.67123L8.21938 9.65L8.58235 10L10.6564 8L8.58235 6Z" fill="white" />
                        <defs>
                            <filter id="filter0_d_0_126" x="0" y="0" width="16" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 0.627451 0 0 0 0 0.560784 0 0 0 0.793507 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_126" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_126" result="shape" />
                            </filter>
                        </defs>
                    </svg></div>
                <div className="w-[166px] h-[1px] flex-shrink-0 bg-[#3DA08F] mb-4"></div>
                <div className=" p-[33px] items-center w-[356px] h-[215px] flex-shrink-0 rounded-[5px] bg-white shadow-[0px_0px_10px_5px_rgba(56,_56,_56,_0.05)]">
                <img className="text-[#07043B] font-nunito-sans text-[45px] font-normal leading-[67.5px]" src="c.svg" alt="" />
                <div className="text-[#07043B] font-open-sans text-[13px] font-normal leading-[23px] tracking-[0.5px]">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.

                </div>
                <div className='flex gap-4'>
                    <img src="profile.svg" alt="" />
                    <div className='flex flex-col'>
                        <span className="text-[#07043B] font-open-sans text-[11px] font-bold leading-normal tracking-[0.55px]">Kyle Burton</span>
                        <span className="text-[#07043B] font-open-sans text-[8px] font-normal leading-[15px] tracking-[0.4px]">Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>
                
            </div>
            <div className='w-[1/2]'>
                <img className="ml-[70px]" src="content2.svg" alt="" />
            </div>
            
        </div>
    )
}

export default Content2