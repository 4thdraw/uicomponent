import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import productdb from '../data/products.json'
import allcategory from '../data/allData.json'

export default function Category() {

  useEffect(()=>{
    console.log(productdb[0]["category"], "전체카테고리",
    allcategory["navdata"]["category"]["submenu"].find((v, i ) => v.linkto === nm ).title
    )
  }, [])

  const { nm } = useParams(); // 구조할당 
  return (
    <section>
      <div className='productlist container'>
            <h3 className='text-center py-5'>{ 
            allcategory["navdata"]["category"]["submenu"].find((v, i ) => v.linkto === nm ).title
            }
         </h3>
        <div className='catenm container'>
          <ul className='d-flex justify-content-center py-3'>
            {
              allcategory["navdata"]["category"]["submenu"].map((v, i)=>{
                return(
                  <li className={`border p-3 rounded-pill mx-2  ${ nm === v.linkto  &&  'bg-dark'  }`}>
                    <Link to={`/products/${v.linkto}`} className={`text-decoration-none ${ nm === v.linkto ? 'text-white' : 'text-dark'} `}>{v.title}</Link>
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
                        <li className={`col-4 pb-3 ${  i % 3 === 1 ? 'px-3' : 'px-0'}`}>
                          {/* 가운데만 px-3, 나머지 px-0  1, 4, 7  등비수열로 3항식으로 처리해줘*/}
                          <img src={v.img} className='img-fluid d-block'></img>
                        </li>
                    )
                  })
              }
            </ul>
        </div>
        
        </div>
    </section>
    

     
  )
}
