
import React from 'react'

const Card = (props) => {
    // const [testi, setTesti] = useState()
    const pokeapi = props.pokeapi
    
    

  return (

    <>
        <div className='md:w-[80%] flex flex-wrap m-auto'>
            {pokeapi?.data?.map((datas, index) => {
                const typePoke = datas?.types[0].type.name
                const styleCard = `border mt-5 w-[85%] md:w-[350px] m-auto rounded ${typePoke === 'grass' ? 'bg-green-100' : 
                typePoke === 'fire' ? 'bg-red-100' : 
                typePoke === 'water' ? 'bg-blue-100' : 
                typePoke === 'bug'  ? 'bg-emerald-100' : 
                typePoke === 'normal' ? 'bg-stone-200' : ''}`


                const styleType = `w-[100px] h-[30px] rounded flex p-1 ${typePoke === 'grass' ? 'bg-green-300' : 
                typePoke === 'fire' ? 'bg-red-300' : 
                typePoke === 'water' ? 'bg-blue-300' : 
                typePoke === 'bug'  ? 'bg-emerald-300' : 
                typePoke === 'normal' ? 'bg-stone-300' : ''}`

                const pictureType = ` ${typePoke === 'grass' ? require('../assets/pokemon/grass.png') : 
                typePoke === 'fire' ? require('../assets/pokemon/fire.png') : 
                typePoke === 'water' ? require('../assets/pokemon/water.png') : 
                typePoke === 'bug'  ? require('../assets/pokemon/bug.png') : 
                typePoke === 'normal' ? require('../assets/pokemon/normal.png') : ''}`

                return(
                    <>
                        <div className={styleCard} key={index}>
                            <div className='flex justify-between'>
                                <div className='flex mt-1 items-center m-2'>
                                    <img className='w-[40px]' src={require('../assets/icons/pokeball.png')} alt="PokeBall" />
                                    <p className='ml-3'>#{datas?.id}</p>
                                </div>
                                <div className={styleType}>
                                    <img src={pictureType} alt="" />
                                    <p className='ml-2'>{typePoke.charAt(0).toUpperCase() + typePoke.slice(1)}</p>
                                </div>
                            </div>
                            <div className='flex items-end justify-between m-2'>
                                <p>{datas?.name.charAt(0).toUpperCase() + datas?.name.slice(1)}</p>
                                <img className='w-[120px]' src={datas?.sprites.front_default} alt="" />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default Card