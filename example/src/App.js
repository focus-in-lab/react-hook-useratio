import React, { useEffect, useRef } from 'react'

import { useRatio } from 'react-hook-useratio'

const CustomButton = ({ children }) => {
  const ref = useRef(null)
  const { height } = useRatio(1, 1, ref)
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = height + 'px'
    }
  }, [height, ref])

  return (
    <button
      ref={ref}
      onClick={() => console.log('clicked!')}
      style={{
        color: '#333',
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
        appearance: 'button',
        width: '100%'
      }}
    >
      {children}
    </button>
  )
}
const App = () => {
  return (
    <div className='app'>
      <div className='col'>
        <CustomButton>
          <span>button 1</span>
        </CustomButton>
      </div>
      <div className='col'>
        <CustomButton>
          <span>button 2</span>
        </CustomButton>
      </div>
    </div>
  )
}

export default App
