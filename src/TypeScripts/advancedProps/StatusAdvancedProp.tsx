import React from 'react'

type StatusProp = {
    // status: string
    status: 'loading' | 'error' |'success'
}

const StatusComponent = (props: StatusProp) => {
    let message
    if(props.status ==='loading'){
        message = 'Loading....'
    }
    else if(props.status === 'error'){
        message = 'An error occurred'
    }
    else if(props.status ==='success'){
        message = 'Data fetch successfuly'
    }
  return (
    <div className='my-8'>
        <h2 className=' text-lg font-bold'>conditional rendering </h2>
         
        <h2>{message}</h2>
    </div>
  )
}

export default StatusComponent