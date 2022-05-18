import Link from 'next/link'
import React, { SVGProps } from 'react'

interface Props{
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    link: string,
    title: string,
}

function SidebarRow({Icon, title}: Props) {
  return (
      <div className="group  flex items-center md:justify-start justify-center space-x-2 cursor-pointer rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100">
        <Icon className="h-6 w-6"/>
        <p className="group-hover:text-twitter hidden md:inline">{title}</p>
      </div>
  )
}

export default SidebarRow