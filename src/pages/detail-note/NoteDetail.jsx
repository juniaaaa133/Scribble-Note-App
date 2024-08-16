import React from 'react'
import './index.css'
import { api } from '../../../utils/api'
import { useLoaderData } from 'react-router'
import useDate from '../../../utils/hooks/useDate'

const NoteDetail = () => {
    let note = useLoaderData();
    let date = useDate(note.createdAt);
  return (
    <div className='ntd-main mt-[50px]'>
      {
        note.coverImage &&
        <img className='ntd-img pics' src={`${api}/${note.coverImage}`} alt="" />
      }
        <p className="fontcl6 sys-f text-[14px]">{date}</p>
        <h2 className='fontcl main-f text-[23px] font-[600]'>{note.title}</h2>
        <p className="fontcl3 main-f text-[18px]">{note.document}</p>
    </div>
  )
}

export default NoteDetail

export const noteLoader = async ({params,request}) => {
let res = await fetch(`${api}/notations/${params.id}`)
let data = await res.json();
return data;
}