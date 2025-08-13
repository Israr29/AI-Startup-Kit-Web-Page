import "./ImagePreview.css";
import ImagePreview from "../../assets/images/ImagePreview.png";


function ImagePreviewComponent() {
    return (
    <section className="img-section glow-card" loading="lazy">
        <img src={ImagePreview} alt="Image-Preview" />
    </section>
    )
}

export default ImagePreviewComponent;