import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="conF">
            <div className="Flogo"><img src="src/assets/logo-white.png" alt="" width={'140px'} /></div>

            <div className="Tf">
                <h4>Quick links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>

            <div className="Sf">
                <h6>Follow Our Social Media</h6>
                <div className="Si-f">
                    <a href="#" className="S-if"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" className="S-if"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#" className="S-if"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" className="S-if"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>

            <div className="Ad-f">
                <div className="adf-1">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="adf-1">
                    NewSteet #45 CA , US
                </div>
            </div>
        </div>

        <div className="po-F">
            All right Reserved by The Golden plate
        </div>
    </footer>
  )
}

export default Footer
