import React, { useState } from 'react'
import page from "../../components/Page/Page";

function LoginPage() {

    const [id, setID] = useState("");
    const [password, setPassword] = useState("")
  return (
    <Page>
        <input value={id} onClick={(e) => setID(e.target.value)} type='text' />
        <input 
        value={password}
        onClick={(e) => setPassword(e.target.value)}
        type='password'/>
        
    </Page>
  )
}

export default LoginPage