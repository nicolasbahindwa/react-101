import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/products',
            
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`,
            
        }),

        addNewProduct: builder.mutation({
            query: (newProduct) =>({
                url: '/products/add',
                method: 'POST',
                body: newProduct,
                headers: {
                    'Content-Type': 'application/json'
                },

            })
        }),
        updateProduct: builder.mutation({
            query: (updatedProduct) => ({
                url: `/products/${updatedProduct.id}`,
                method: 'PUT',
                body: updatedProduct,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            })
        }),
    })
})


export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation} = productsApi
