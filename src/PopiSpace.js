import React from 'react'

function PopiSpace(props) {
  const { name, image, address} = props
  return (
    <div className="Popiblock">
      <h1>{name}</h1>
      <div>{address}</div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}     
        width="300"
        height="300"
        alt={`${name}-${image}`}
      />
    </div>
  )
}

export default PopiSpace