import React from 'react'

const Title = ({name}) => {
   return (
      <div className='text-xl md:text-3xl font-semibold pb-5 border-b-2 border-b-blue-500 mb-8'>
         {name}
      </div>
   )
}

export default Title
