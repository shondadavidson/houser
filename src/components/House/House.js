import React from 'react';


export default function House (props){
    console.log(2, props)
    return (
        <div>
            <p>{props.house.name}</p>
            <p>{props.house.address}</p>
            <p>{props.house.city}</p>
            <p>{props.house.state}</p>
            <p>{props.house.zip}</p>
            <button>Delete</button>
            <p>- - - - - - - - - - - - - - - -</p>
        </div>
    )
}