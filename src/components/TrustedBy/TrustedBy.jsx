import "./TrustedBy.css";
import Echo from '../../assets/icons/echo.png';
import Acme from '../../assets/icons/acme.png';
import quantum from '../../assets/icons/quantum.png';
import pulse from '../../assets/icons/pulse.png';
import outside from '../../assets/icons/outside.png';
import apex from '../../assets/icons/apex.png';
import celestial from '../../assets/icons/celestial.png';
import twice from '../../assets/icons/2twice.png';

function TrustedBy(){
    return(
        <>
    <section class="trusted-section">
  <p class="trusted-text">Trusted by the world’s most innovative teams</p>
  <div class="logo-grid">
    <div class="logo-box"><img src={Acme} alt="" /></div>
    <div class="logo-box"><img src={Echo} alt="" /></div>
    <div class="logo-box"><img src={quantum} alt="" /></div>
    <div class="logo-box"><img src={pulse} alt="" /></div>
    <div class="logo-box"><img src={outside} alt="" /></div>
    <div class="logo-box"><img src={apex} alt="" /></div>
    <div class="logo-box"><img src={celestial} alt="" /></div>
    <div class="logo-box"><img src={twice} alt="" /></div>
   
  </div>
</section>

        </>
    )

}


export default TrustedBy;