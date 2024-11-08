import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {
    const [addNewProduct, { data, isLoading, error}] = useAddNewProductMutation()

    if(error){
        console.error('Error:', error)
        return <p>Error adding product.</p>
    }

    if(isLoading){
        return <p>Loading...</p>
    }

    const handleAddProduct = async (e) => {
        try{
            e.preventDefault()
            const newProductData = {
                id:1,
                title: 'Amazing T-shirt',
                description: 'lorem ipsum dolor sit am'
            }
             await addNewProduct(newProductData)
             console.log('Product added successfully:', data)
             // Reset form
            //  e.target.reset()
        }
        catch(error){
            console.error('Error:', error)
            
        }
    }

  return (
    <div>

        <form>
          <h1>{data?.id}</h1>
          <h1>{data?.title}</h1>
          <h1>{data?.description}</h1>
          <input type="text" placeholder="Product Name" />
          <input type="number" placeholder="Product Price" />
          <button type="submit" onClick={handleAddProduct} disabled={isLoading}>Add Product</button>
        </form>
      <h2>Add New Product</h2>

    </div>
  )
}

export default AddNewProduct