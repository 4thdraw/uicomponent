import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import productdb from '../data/products.json'
import allcategory from '../data/allData.json'

export default function Category() {

  useEffect(()=>{
    console.log(productdb[0]["category"])
  }, [])

  const { nm } = useParams(); // 구조할당 
  return (
    <section>
        <div className='catenm container'>
          <ul className='d-flex'>
            {
              allcategory.navdata["category"]["submenu"].map((v, i)=>{
                return(
                  <li>
                    <Link to={`/products/${v.linkto}`}>{v.title}</Link>
                  </li>
                )
              })
            }

          </ul>
          <ul className='row'>
              {
                  
                  productdb
                  .filter((v, i ) => v.category === nm                   
                  )
                  .map((v, i)=>{
                    return(
                        <li className='col-4'>
                          <img src={v.img} className='img-fluid'></img>
                        </li>
                    )
                  })
              }
            </ul>
        </div>
        <div className='productlist'>
            <h3>{nm }</h3>
        </div>
    </section>
    

     
  )
}
