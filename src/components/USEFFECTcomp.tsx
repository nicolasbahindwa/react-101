import React, {useState, useEffect} from 'react'

type product = {
    id: number,
    title: string,
    name: string,
    price: number,
    quantity: number,
    category: string,
    discountPercentage: number,
    stock: number,
    image: string,
    description: string,
    rating: number,
    thumbnail: string
 
}

const USEFFECTcomp = () => {
    const [data, setData] = useState<product | null>(null)

    useEffect(() => {
       const fetchData = async () => {
        try{
            const response = await fetch('https://dummyjson.com/product/1')
            if(!response.ok){
                throw new Error('HTTP error!')
            }
            const json = await response.json()
            setData(json)
        }
        catch(error){
            console.error('Error in useEffect hook:', error)
        }
       }

       fetchData();
    },[])
  return (
    <div>
        {
        data ? (
            <>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Price: ${data.price}</p>
            <p>Rating: {data.rating}</p>
            <img src={data.thumbnail} alt={data.title} />
            </>
        ): 
        (
            <h2>Loading...</h2>
        )
    }

    </div>
  )
}

export default USEFFECTcomp