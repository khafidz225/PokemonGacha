import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../features/CardSlice'

const Cardgacha = (props) => {
    const [buttonDisable, setButtonDisable] = useState(false)
    const [countdown, setCountdown] = useState(0)
    const [failed, setFailed] = useState(null)
    const [success, setSuccess] = useState(null)
    const [status, setStatus] = useState(null)
    const [typespoke, setTypespoke] = useState('')
    const dispatch = useDispatch()

    const pokeapi = props?.pokeapi.data

    useEffect(() => {
      const timer = setTimeout(() => {
        if (countdown === 0) {
          setButtonDisable(false);
        } else {
          setCountdown(countdown - 1);
        }
      }, 1000);
        return () => clearTimeout(timer)
    }, [countdown, buttonDisable])
    const handleClick = () => {
        setButtonDisable(true)
        setCountdown(10)
        const randomCard = Math.random() >= 0.5 ? 'yes' : 'no';
        setStatus(randomCard)
        if(randomCard === 'yes') {
            const randomPoke = Math.floor(Math.random() * pokeapi.length)
            setSuccess(pokeapi[randomPoke])
            setTypespoke(pokeapi[randomPoke]?.types[0].type.name)
            alert("Selamat Anda mendapatkan Pokemon Card")
            dispatch(addCard(pokeapi[randomPoke]))
        } else{
            setFailed('Coba Lagi')
        }
    }
    
    const styleCard = `border mt-5 w-[85%] md:w-[350px] m-auto rounded ${typespoke === 'grass' ? 'bg-green-100' : 
                typespoke === 'fire' ? 'bg-red-100' : 
                typespoke === 'water' ? 'bg-blue-100' : 
                typespoke === 'bug'  ? 'bg-emerald-100' : 
                typespoke === 'normal' ? 'bg-stone-200' : ''}`


                const styleType = `w-[100px] h-[30px] rounded flex p-1 ${typespoke === 'grass' ? 'bg-green-300' : 
                typespoke === 'fire' ? 'bg-red-300' : 
                typespoke === 'water' ? 'bg-blue-300' : 
                typespoke === 'bug'  ? 'bg-emerald-300' : 
                typespoke === 'normal' ? 'bg-stone-300' : ''}`

                const pictureType = ` ${typespoke === 'grass' ? require('../assets/pokemon/grass.png') : 
                typespoke === 'fire' ? require('../assets/pokemon/fire.png') : 
                typespoke === 'water' ? require('../assets/pokemon/water.png') : 
                typespoke === 'bug'  ? require('../assets/pokemon/bug.png') : 
                typespoke === 'normal' ? require('../assets/pokemon/normal.png') : ''}`
                console.log(typespoke)
  return (
    <>
        <div className=' w-[90%] m-auto rounded p-5 font-medium border-b-2'>
            <h1 className='text-[32px] text-center'>Gacha Pokemon Card</h1>
            {/* <p>Please press the gacha button and get the pokemon you want</p> */}
            <div className='md:w-[50%] m-auto h-[250px] items-center flex'>
                {status === 'yes' ? 
                <div className={styleCard} >
                    <div className='flex justify-between'>
                        <div className='flex mt-1 items-center m-2'>
                            <img className='w-[40px]' src={require('../assets/icons/pokeball.png')} alt="PokeBall" />
                            <p className='ml-3'>#{success?.id}</p>
                        </div>
                        <div className={styleType}>
                            <img src={pictureType} alt="" />
                            <p className='ml-2'>{typespoke?.charAt(0).toUpperCase() + typespoke?.slice(1)}</p>
                        </div>
                    </div>
                    <div className='flex items-end justify-between m-2'>
                        <p>{success?.name.charAt(0).toUpperCase() + success?.name.slice(1)}</p>
                        <img className='w-[120px]' src={success?.sprites.front_default} alt="" />
                    </div>
                </div>
                : 
                <p className='m-auto'>{failed}</p>}
            </div>
            <div className='justify-center flex mt-5'>
                <button onClick={() => handleClick()} disabled={buttonDisable} className='rounded p-2 text-center m-auto w-[200px] text-[18px] bg-gradient-to-r bg-sky-300 hover:bg-sky-500 hover:text-white ease-in duration-300'>
                    {buttonDisable === true ? `Wait ${countdown} seconds`: 'Go To Gacha'}
                </button>
            </div>
        </div>
    </>
  )
}

export default Cardgacha