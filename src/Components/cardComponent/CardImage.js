import React from 'react'

const CardImage = ({eachCollection}) => {
  return (
    <>
         <img
                src={eachCollection.photo}
                alt={eachCollection.title}
                className="relative mx-0 -mt-6 h-40 w-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
              />
    </>
  )
}

export default CardImage