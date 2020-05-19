import React from 'react'

export default function Person(props) {
    const {info} = props

    if(!info) {
        return <p>Fetching your Team Member info</p>
    }



    return (
        <div className="team-memeber">
            <h2>Name:&nbsp;{info.name}</h2>
            <p>Email:&nbsp;{info.email}</p>
            <p>Role:&nbsp;{info.role}</p>


        </div>
    )
}