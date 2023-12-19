import { Parallax } from "react-parallax";
import "./Homepage.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import ScrollButton from "../components/ScrollButton/scroll";

function Homepage() {
  const images = [img2, img4, img3, img1];

    // const scrollToTop = ()=>{
    //   window.scrollTo({top:0, behavior:"smooth"})
      
    // }

  return (
    <>
    
      <div className="base">
        {images.map((image, index) => (
          <Parallax
            key={index}
            strength={-600 - index * 50}
            bgImage={image}
            bgImageAlt={`Alt Image ${index}`}
          >
            <div className="content">
              {/* <button onClick={()=>scrollToTop()}>UP</button> */}
            </div>
            <ScrollButton/>
          </Parallax>
        ))}
      </div>
    </>
  );
}

export default Homepage;
