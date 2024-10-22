import React, { useContext, useEffect, useState } from 'react'
import Note from '../../components/notes/Note'
import NoteCtn from '../../components/notes/NoteCtn'
import { api } from '../../../utils/api'
import { useLoaderData } from 'react-router'
import Add from '../../components/add-cta/Add'
import Pagination from '../../components/pagination/Pagination'
import { UserContext } from '../../context/userContext'
import { AuthContext } from '../../context/authContext'

const HomePage = () => {

 let [data,setData] = useState(null);
 let [pageNo,setPageNo] = useState(1);
 let {token} = useContext(UserContext)
 let {user} = useContext(AuthContext)

 let fetchNotes = async () => {
  let res = await fetch(`${api}/notations?page=${pageNo}`,{
    headers :{ 
      "Authorization" : `Bearer ${token}`
    }
  })
  let data = await res.json();
  setData(data);
 }

useEffect(()=>{
  fetchNotes();
},[pageNo])

  return (
   data && data.notes.length > 0 && user ? 
   <div className='p-[20px] relative'>
   <NoteCtn noteData={data.notes}/>
   <Pagination 
   limit={data.note_infos.noteCount}
    page={pageNo} 
    handlePage={setPageNo}
    notePages={data.note_infos.pages}
    />
   <Add />
</div>
: data && data.notes.length == 0 ?
<>
<div className='w-fit h-fit m-auto fixed top-0 left-0 right-0 bottom-0 text-[20px] fontcl sys-f'>Empty Notations</div>
<Add />
</>
:
<div className='w-fit h-fit m-auto fixed top-0 left-0 right-0 bottom-0 text-[20px] fontcl2 sys-f'>Loading</div>
  )
}

export default HomePage
