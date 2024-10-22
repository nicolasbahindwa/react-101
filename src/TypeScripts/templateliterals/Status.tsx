type StatusProps = {
    status: 'loading' | 'success' | 'error',
}

export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    }
    else if(props.status === 'error'){
        message = 'An error occurred. Please try again later.'
    }
    else if(props.status ==='success'){
        message = 'Data fetched successfully!'
    }
    
    return (
        <div className="mt-8 ">
            <h2>status {message}</h2>
        </div>
    )
}