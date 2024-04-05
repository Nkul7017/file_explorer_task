import React, { useState } from 'react'
import { explorer } from './data/data'
import Folder from './componets/Folder'
function App() {
  const [data,setData]=useState(explorer)
  return (
    <>
    <div className=' p-5'>
   <Folder data={data} />
   </div>
    </>
  )
}

export default App
