import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
    
    const handle = (e) => {
        e.preventDefault()
        Swal.fire({
            icon: 'error',
            title: 'Form Submitted!',
            text: `Name Is ${name} and Email Is ${email} and Message Is ${message}`,
            confirmButtonText: 'Submit',
            confirmButtonColor: 'orange'
        })
    }
    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [message , setmessage] = useState('')
  return (
    <div>
        <form action="" onSubmit={handle}>
            <h1>Contact Us</h1>
            <input type="text" placeholder='Email' required
            value={name}   onChange={(e) => setname(e.target.value)}
            />
            <input type="text" placeholder='Name' required 
            value={email} onChange={(e) => setemail(e.target.value)} 
            />
            <textarea rows={10} cols={10} required 
            value={message} onChange={(e) => setmessage(e.target.value)}
            ></textarea>
            <input className='btn' type="submit" value={'Send'} />
        </form>
    </div>
  )
}

export default Contact