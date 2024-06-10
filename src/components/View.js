import React, { useState } from 'react'
import { Nav } from './Nav'

export const View = () => {
    const [data,changeData]=useState([
        {
            "bookname":"qwer",
            "title":"qwed",
            "auther":"asxc",
            "price":123
        }
    ])

  return (
    <div>
         <h1><center>View All BOOK Details</center></h1>
        <Nav></Nav>
        
        <div class="container">
       <div class="row g-3">
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <table class="table" border="2" >
                   <thead>
                     <tr>
                       <th scope="col">book name</th>
                       <th scope="col">book title</th>
                       <th scope="col">auther</th>
                       <th scope="col">price</th>
                     </tr>
                   </thead>
                   <tbody>
                   {data.map(
                       (value,index)=>
                           {
                               return <tr>
                                 <td>{value.bookname}</td>
                                 <td>{value.title}</td>
                                 <td>{value.auther}</td>
                                 <td>{value.price}</td>
                               </tr>
                              
                           }
                   )}
                    </tbody>
                 </table>
           </div>
       </div>
   </div>
    </div>
  )
}
