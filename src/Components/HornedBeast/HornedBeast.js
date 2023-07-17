import React from 'react'

export default function HornedBeast({title, imgUrl, description}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imgUrl} alt={description} title={title}></img>
      <p>{description}</p>
    </div>
  )
}
