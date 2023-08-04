import React from 'react'

const ListItem = ({index,item,DeleteItem}) => {
    const [show, setShow] = React.useState(false)
   
  return (
    <div className='relative w-[90%] mx-auto'>
        <div onMouseOver={()=>setShow(true)} onTouchEnd={()=>setShow(false)} onTouchMove={()=>setShow(false)} onMouseOut={()=>setShow(false)} >
    <div   className={`flex justify-between items-center ${item.type == "expense" ? "bg-red-400" : " bg-teal-800"} p-2 m-2 rounded-lg`}>
        <h1 className="text-xl text-white">{item.title}</h1>
        <h1 className="text-xl text-white">{item.amount}</h1>
    </div>
    {show===true? <div className='absolute left-[-15px] top-2'>
            <button className='py-1 px-2 bg-red-600 hover:bg-red-700 text-white' onClick={()=>DeleteItem(index)}>x</button>
    </div>:null}
    </div>
</div>
  )
}

export default ListItem