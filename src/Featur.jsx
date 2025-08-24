import React from 'react'
import Fe1 from './Fe1'

const Featur = ({ title}) => {
  return (
   <section className="sec-2">
    <div className="ft">
    {title}
    </div>

    <div className="items">
       <Fe1 ItemName={'Stake'} Price={'$5'} image={'src/assets/pngwing.com (33).png'} width={'190px'}/>
       <Fe1 ItemName={'Chicken Tandoori'} Price={'$5'} image={'src/assets/pngwing.com (31).png'} width={'200px'}/>
       <Fe1 ItemName={'Plater'} Price={'$5'} image={'src/assets/pngwing.com (32).png'} width={'190px'}/>
       <Fe1 ItemName={'Plater'} Price={'$5'} image={'src/assets/pngwing.com (32).png'} width={'190px'}/>
    </div>

    <div className="Men-S">
      <img src="src/assets/menu-icon87.png" alt="" width={'30px'} />
      <a href="#">Explore Menu</a>
    </div>
   </section>
  )
}

export default Featur
