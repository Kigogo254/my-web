
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
     <div className="footer"> 
       <>Get me on these socialmedia accounts</>
      <div className="footer-grid">
      <div className="col-one b">
        <a href="https://www.facebook.com/profile.php?id=61552329726137" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} color="blue" />
           Kigogo Ian
        </a>
      </div>
      <div className="col-one b">
        <a href="https://www.instagram.com/fullstack_kigogo254/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} color="#E4405F" />
            @fullstack kigogo254
        </a>
      </div>
      <div className="col-one">
         <a href="tel:+254793406784" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FaWhatsapp size={32} color="green" />
            0793406784
          </a>
     </div>
     </div>
     You can click the icons to move direct to the desired socialmedia account of mine <br></br>@2024 ,@Kigogo @All rights reserved. Thanks
    </div>
  )
}

export default Footer