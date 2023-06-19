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
            case 1: return(<Slide image={Mary} words ="Some Words"/>); 
            case 2: return(<Slide image={Cerner} words="Some Words"/>); 
            case 3: return(<Slide image={Rock} words ="Some Words"/>); 
            case 4: return(<Slide image={Data} words ="Some Words"/>);
            default: return(<Slide image={Mary} words ="Some Words"/>);
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