import React from 'react'



const Form2 = (props) => {

    const {myOtherData,otherMessage,anotherNote,music} = props

  return (
    <div style={{backgroundColor: 'green'}}>Form2
    <p>Passed from App.js: {myOtherData}</p>
    <p>Passed from App.js: {otherMessage}</p>
    <p>Passed from App.js: {anotherNote}</p>
    <p>Passed from App.js: {music}</p>



    </div>
  )
}

export default Form2