import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full h-10  flex justify-between items-center p-10'>
        <h2>Orange</h2>
        <div className='flex items-center gap-1 px-2 py-1 bg-orange-500 rounded-md text-white'>
            <h2>Favourites</h2>
            <h2>{data.filter((elem)=>{
              return elem.added}).length}</h2>
        </div>
    </div>
  )
}

export default Navbar