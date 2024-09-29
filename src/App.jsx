import React, { useState } from 'react'
import Card from './Component/Card'
import Navbar from './Component/Navbar'

function App() {
  
  const data = [
    {img:"https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song:"Challenger", Artist:"Harsh",added:false},
    {img:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song:"Believer", Artist:"John",added:false},
    {img:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song:"Unstoppable", Artist:"Yallina",added:false},
    {img:"https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", song:"Sunday", Artist:"Rohit",added:false},
  ]

  const[realData, setrealData] = useState(data);
  const handlebtn = (cardIndex)=>{
    console.log(cardIndex)
    return setrealData((prev)=>{
         return prev.map((item,index)=>{
             if(cardIndex===index){
              return {...item, added:!item.added}
             }
             else{
              return item;
             }
         })
    })
  }
  return (
    <div className='w-full h-screen bg-zinc-400 p-10 '>
      <Navbar data ={realData}/>
      <div className='flex gap-10 flex-wrap mx-10'>
      {realData.map((elem,index)=>{
        return <Card key={index} index={index}  values = {elem} HandleClick = {handlebtn} />
      })}
      </div>
      
    </div>
  )
}

export default App
