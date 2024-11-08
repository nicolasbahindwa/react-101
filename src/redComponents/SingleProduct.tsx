import React from 'react'
import {  useGetProductByIdQuery } from '../app/service/dummyData'

const SingleProduct = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(2)
    console.log(data)
  return (
    <div>SingleProduct
        {
            isLoading && <p>Loading...</p>
        }
        {
            isError && <p>Error loading the product data</p>
        }
        {
            data && <div className='border p-2 '>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <img src={data.thumbnail} alt={data.title}/>
            </div>

            
        }
    </div>
  )
}

export default SingleProduct