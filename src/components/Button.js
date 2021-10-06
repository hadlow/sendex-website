import React from "react"

const Button = ({type, color, href, className, children}) => {
    const classes = `bg-${color} text-white rounded px-4 py-2 ${className}`

    return (
        <>
            {(type === 'button' ? <button className={classes}>{children}</button> : null)}
            
            {(type === 'a' ? <a href={href} className={classes}>{children}</a> : null)}
        </>
    )
}

export default Button
