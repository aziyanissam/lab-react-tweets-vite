import React from 'react'

function Message({ props }) {
    return (
        <div>
            <p className="message">
                {props}
            </p>
        </div>
    )
}

export default Message
