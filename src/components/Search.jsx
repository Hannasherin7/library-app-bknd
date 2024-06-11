import React, { useState } from 'react'
import { Nav } from './Nav'

export const Search = () => {
    const [data,setData]=useState(
        {
          "bookname":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
      }
  return (
    <div>
         <h1><center>SEARCH BOOK</center></h1>
        <Nav></Nav>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">BOOK Name</label>
                        <input type="text" className="form-control"name='bookname' value={data.bookname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button onClick={readVlue} className="btn btn-primary">search</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
