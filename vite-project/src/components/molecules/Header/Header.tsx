import { useNavigate } from 'react-router-dom'



const Header = () => {
  const navigate = useNavigate();

  const goToTeam = () => {
    navigate('/team');
  }

  const goToFeatures = () => {
    navigate('/features');
  }

  const goToSignIn = () => {
    navigate('/signIn');
  }

  return (
    <div className=" flex  justify-between items-center w-full h-[100px] p-[80px]" >
        <div className="flex"><img className="w-[166px] h-[49px] " src="logo.svg" alt="Logo" />
        </div>
        <div className="flex w-[300px] justify-between text-[#07043B] font-raleway text-[16px]">
        <button onClick={goToFeatures}>Features</button>
        <button onClick={goToTeam}>Team</button>
        <button onClick={goToSignIn}>Sign In</button>
        </div>
        </div>
  )
}

export default Header