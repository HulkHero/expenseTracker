import React from 'react'
import ListItem from './ListItem'
const ListData = ({data,DeleteItem}) => {
  return (
    <div className='flex-grow-[5] overflow-y-scroll'>
                {data && data.map((item, index) => {
                    return (
                        <>
                        <ListItem key={index} index={index} item={item} DeleteItem={DeleteItem} ></ListItem>
                        </>
                    )
                })}
            </div>
  )
}

export default ListData