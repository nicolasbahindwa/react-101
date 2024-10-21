import React from 'react'

type ContainerProps = {
    styles : React.CSSProperties
}

const ContainerStyles = (props:ContainerProps) => {
  return (
    <div style = {props.styles}>
        <h1>Container Component</h1>
        <p>This is a container component.</p>
        <p>It accepts props from its parent component.</p>
  
    </div>
  )
}

export default ContainerStyles