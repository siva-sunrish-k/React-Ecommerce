
import { img } from "../assets/images";
import KfcImg from "../assets/img/kfc.jpg"


import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ImageComponent = () => {
    return (
        <>

            {/* Local */}
            <img src={KfcImg} alt="KFC" />

            {/* CDN Links */}
            <img src={img} alt="" />



            {/* Lazy Load */}
            <LazyLoadImage alt={KfcImg} effect="blur" wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "1s" },
            }}
                src={KfcImg} />
        </>
    )
};

export default ImageComponent;