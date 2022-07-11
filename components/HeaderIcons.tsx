import Link from 'next/link'
import React, { SVGProps } from 'react'
import { Interface } from 'readline'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string

}

function HeaderIcons({ Icon, title }: Props) {
    return (
        <div className='flex flex-col text-gray-600 space-x-2 cursor-pointer items-center rounded-full hover:text-black transition-all duration-200  group' >
            <Icon className='h-6 w-6' />
            <p className='text-xs justify-start'>{title}</p>
        </div>

    )
}

export default HeaderIcons