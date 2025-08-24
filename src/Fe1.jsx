import React from 'react'

const Fe1 = ({ItemName ,Price , image, width}) => {
  return (
     <div className="Dc">
            <img src={image} alt="" width={width}/>
            <div className="dC-1">
                <h5>5.0</h5>
                <h3>{ItemName}</h3>
                <a href="#" className="price">{Price}</a>
            </div>
        </div>
  )
}

export default Fe1
