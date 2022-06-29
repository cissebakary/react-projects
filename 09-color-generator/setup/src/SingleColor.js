import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, newHcolor}) => {
  const [alert, setAlert] = useState(false)
  // const newColor = rgb.rgb
  const bcg = rgb.join(',')
  // const hexColor = rgbToHex(...rgb)
  
  // console.log(rgb)
  // console.log(bcg)
  // console.log(hex)
  console.log(newHcolor)
  const hexValue = `#${newHcolor}`
  return <article className={'color'} style={{backgroundColor:`rgb(${bcg})`}} onClick={() => {setAlert(() => {
    setAlert(!alert)
    navigator.clipboard.writeText(hexValue)
    
      setTimeout(() => {
      setAlert(false)
      },2000)
    
  })}} >
    {/* onClick={setAlert(!alert)} */}
    <p className='percent-value'>{weight}%</p>
    
    {/* <p className='color-value'>{hexColor}</p> */}
    <p className='color-value'>{hexValue}</p>
    {alert === true && <p>Copied to the clipboard</p> }
    
  </article>
}

export default SingleColor
