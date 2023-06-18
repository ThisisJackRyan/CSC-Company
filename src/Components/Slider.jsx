import Mary from "../Assets/Images/SlidingImages/st-marys.jpg"
import Cerner from "../Assets/Images/SlidingImages/cerner.jpg"
import Rock from "../Assets/Images/SlidingImages/CSC_HomeSlider_Rockhurst.png"
import Data from "../Assets/Images/SlidingImages/DataCenter.jpg"
import { useState } from "react"
import Slide from "./Slide"




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
                    <Slide image={Mary} words ="Some Words"/>
                </li>
                <li>
                    <Slide image={Cerner} words ="Some Words"/>
                </li>
                <li>
                    <Slide image={Rock} words ="Some Words"/>
                </li>
                <li>
                    <Slide image={Data} words ="Some Words"/>
                </li>
            </ul>
            <button onClick={swap}>{whichSlide}</button>
        </div>
    )
}

export default Slider;