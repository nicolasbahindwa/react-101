import React from 'react'
import { useGetAllProductsQuery, useGetProductByIdQuery } from '../app/service/dummyData'

const Allproducts = () => {
    const {data, isError, isLoading} = useGetAllProductsQuery(undefined, undefined)
    
    console.log(data)
    if(isError){
        return <h1>Error fetching products</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        
        Allproducts======
        {data.products.map((product) => (
            <div key={product.id}>
                <h1 > {product.title}</h1>
                <p>{product.description}</p>
            </div>
            
        ))}


    </div>
  )
}

export default Allproducts