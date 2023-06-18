import Mary from "../Assets/Images/SlidingImages/st-marys.jpg"
import Cerner from "../Assets/Images/SlidingImages/cerner.jpg"
import Rock from "../Assets/Images/SlidingImages/CSC_HomeSlider_Rockhurst.png"
import Data from "../Assets/Images/SlidingImages/DataCenter.jpg"
import { useState } from "react"




const Slider = () => {

    const [whichSlide, SetWhichSlide] = useState(1)
    const swap = () => {
        if(whichSlide === 4) {
            SetWhichSlide(1);
        }
        else {
            SetWhichSlide(whichSlide + 1);
        }
        console.log(whichSlide)
        
    }
    return (
        <div className="Slider">
            <ul>
                
                <li>
                    <div className="slide" style={{backgroundImage: `url(${Mary})`}}>
                        <div className="words">
                            <span>here are some words</span>
                        </div>
                        <div className="btnLearnMore"></div>
                    </div>
                </li>
                <li>
                    <div className="slide" style={{backgroundImage: `url(${Cerner})`}}>
                        <div className="words">
                            <span></span>
                        </div>
                        <div className="btnLearnMore"></div>
                    </div>
                </li>
                <li>
                    <div className="slide" style={{backgroundImage: `url(${Rock})`}}>
                        <div className="words">
                            <span></span>
                        </div>
                        <div className="btnLearnMore"></div>
                    </div>
                </li>
                <li>
                    <div className="slide" style={{backgroundImage: `url(${Data})`}}>
                        <div className="words">
                            <span></span>
                        </div>
                        <div className="btnLearnMore"></div>
                    </div>
                </li>
            </ul>
            <button onClick={swap}>{whichSlide}</button>
        </div>
    )
}

export default Slider;