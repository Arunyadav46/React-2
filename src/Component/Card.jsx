import React from 'react'

function Card({values,index, HandleClick}) {
  const{img, song,Artist, added} = values;
  return (
    <div className='w-60 h-32  bg-zinc-100 rounded-md p-2  flex gap-4 my-5  relative'>
      <div className='w-20 h-20 bg-red-500 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={img} alt="" />
      </div>
      <div>
      <h2 className='text-2xl font-semibold' >{song}</h2>
      <h2>{Artist}</h2>
      <button onClick={()=>HandleClick(index)} className={`absolute -bottom-5 -translate-x-[50] -translate-y-[50] left-12 px-2 py-2 ${added===true?"bg-yellow-500":"bg-orange-500"} rounded-full text-white`}>{added===true?"Added":"Add to favourite"}</button>
      </div>
    </div>
  )
}

export default Card