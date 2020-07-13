import React from 'react'

export default function Todo(props) {
    const {title, isDone} = props
    return (
        <div>
            {title}    
        </div>
    )
}
