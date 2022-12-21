import React from 'react'
import './myStyles.css' 

function StyleSheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font-xl`} >This Text is in StyleSheet.js</h1>
        <ul>
          
        </ul>
    </div>
  )
}

export default StyleSheet

