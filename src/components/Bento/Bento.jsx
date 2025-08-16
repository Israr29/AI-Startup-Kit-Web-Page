import './Bento.css';
import seoImage from "../../assets/images/Seo-Visuals.png"
// import insideDashborad from "../../assets/images/inside-dashoard.png";

function Bento(){
    return(
        <>
        <div className="bento-container">
            <h3 className='heading'>Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</h3>
            <div className="bento-1">
                <div className="seo-box">
                    <div className="seo-img">
                        <img src={seoImage} alt="SEO Goal" />
                        <h4>SEO goal setting</h4>
                        <p>Helps you set and achieve SEO goals with guided assistance.</p>
                    </div>
                </div>
            </div>
            <div className="bento-2">
                <div className="seo-box">
                    <div className="seo-img">
                        <img src={seoImage} alt="SEO Goal" />
                        <h4>SEO goal setting</h4>
                        <p>Helps you set and achieve SEO goals with guided assistance.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Bento;