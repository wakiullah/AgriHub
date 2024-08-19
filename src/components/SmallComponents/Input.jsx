import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function Input({ placeholder, type, border }) {
    const borderColor = `input-${border}`;

    return (
        <input
            type={type ? type : "text"}
            placeholder={placeholder ? placeholder : ''}
            className={`input input-bordered w-full  ${borderColor}`} />
    )
}

