import React from 'react'

export default function InputButton({ text }) {
    return (
        <input className='w-full bg-custom-primary hover:bg-custom-primary-dark px-2 py-3 rounded cursor-pointer text-white text-xl' type="button" value={text} />
    )
}
