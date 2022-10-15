import React,{useState} from 'react'
import Form2 from './Form2'

const Form = (props) => {

  const {myData,message,note,music,record} = props


  return (
    <div>
    <div style={{border: '1px solid blue',
                marginBottom: '10px',
                backgroundColor: 'blue'}}>
    <h1>Form 1</h1>
    <p>{myData}</p>
    <p>{message}</p>
    <p>{note}</p>
    <p>{music}</p>
    <p>{record}</p>


    </div>
    <Form2 myOtherData={myData} otherMessage={message} anotherNote={'I passed this note from Form 1'} music={'This is also music'} />


    </div>
  )
}

export default Form