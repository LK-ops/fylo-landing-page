import EmailForm from '../../atoms/EmailForm/EmailForm';

const Content1 = () => {

  return (
    <div className="flex  w-full p-[80px] ">
        <div className="w-1/2 flex flex-col gap-10">
        <div className="text-[#07043B] w-[627px] font-raleway text-[40px] font-bold leading-[60px]">
        All your files in one secure location, accessible anywhere.
        </div>
        <div className="text-[#07043B] w-[585px] font-open-sans text-[17px] font-normal leading-[24px] tracking-[0.531px]">
        Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
        </div>
        <EmailForm/>
        
        </div>
        <div className="w-1/2">
            <img className="w-[640px] h-[474px] shrink-0" src="content1.svg" alt="" />
        </div>
    </div>
  )
}

export default Content1