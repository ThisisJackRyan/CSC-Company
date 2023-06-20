import Mary from "../../Assets/Images/SlidingImages/st-marys.jpg"
import Cerner from "..//../Assets/Images/SlidingImages/cerner.jpg"
import Rock from "../../Assets/Images/SlidingImages/CSC_HomeSlider_Rockhurst.png"
import Data from "../../Assets/Images/SlidingImages/DataCenter.jpg"
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
    }
    const reverseSwap = () =>{
        if(whichSlide === 1) {
            SetWhichSlide(4);
        }
        else {
            SetWhichSlide(whichSlide - 1);
        }
    }

    const CaseSlide = (num) => {
        switch(num){
            case 1: return(<Slide image={Mary} words ="Discover the value of automation systems in any environment"/>); 
            case 2: return(<Slide image={Cerner} words="Reduce energy consumption without sacrificing comfort"/>); 
            case 3: return(<Slide image={Rock} words ="Illuminate spaces with sleek design for optimal use"/>); 
            case 4: return(<Slide image={Data} words ="Minimize security risks with cost-effective surveillance"/>);
            default: return(<Slide image={Mary} words ="Discover the value of automation systems in any environment"/>);
        }
    }
    
    return (
        <div className="Slider">
            <ul>
                <li>
                    {CaseSlide(whichSlide)}
                </li>
            </ul>
            <div className="swapButton" onClick={reverseSwap}> {"<"} </div>
            <div className="swapButton right" onClick={swap}> {">"} </div>
        </div>
    )
}

export default Slider;