import React from 'react'

interface Props {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
}
function Input({ value, setValue, placeholder }: Props) {
    return (
        <div><input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            type="text"
            className='bg-transparent outline-none border-2 text-start rounded-fulls mt-1 text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-all duration-200 cursor-pointer' /></div>
    )
}

export default Input