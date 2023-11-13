import React, { useState } from 'react'
import './App.css'


const Friends = () => {
    const [friendsss, setFriends] = useState([])
    const [valueee, setValueee] = useState('')

    return (
        <div className='friends'>
            <div className="list">
                {
                    friendsss.map((item) => {
                        return <p>{item}</p>
                    })
                }
            </div>
            <div className="input-sect">
                <input type="text" placeholder='Enter Name Heree...'
                    valueee={valueee}
                    onChange={(e) => setValueee(e.target.value)}
                />
                <button style={{background: 'royalblue' , color: 'white'}} onClick={function () { if(!valueee){return alert("Please Give Me Some Text / Names")} const oldFriends = [...friendsss]; oldFriends.push(valueee); friendsss.push(valueee); setFriends(oldFriends) }}>Submit</button>
                <button onClick={()=> setFriends([])}>Reset</button>
            </div>
        </div>
    )
}

export default Friends