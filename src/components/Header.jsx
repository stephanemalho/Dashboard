import React from 'react'
import { RiH1 } from 'react-icons/ri'

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">
        {category}
      </p>
      <h1 className='text-3xl font-extrabold tracking-tight text-slate-900'>
        {title}
      </h1>
    </div>
  )
}

export default Header