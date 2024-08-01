import React from 'react'

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
      <div className="w-28 h-28 border-4 border-white rounded-full animate-spin"></div>
    </div>)
}

export default Loader 

