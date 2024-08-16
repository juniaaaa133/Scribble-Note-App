import React from 'react'
import './index.css'
import Note from './Note'

const NoteCtn = ({noteData,account}) => {
  return (
    <div className='nt-ctn'>
        {
          noteData.map((data,index) => (
           <Note
            key={index}
            account={account ? account : data.account}
            note={data}/>
          ))
        }
    </div>
  )
}

export default NoteCtn