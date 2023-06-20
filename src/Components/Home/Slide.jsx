


const Slide = (props) => {
    return (
        <div className="slide" style={{backgroundImage: `url(${props.image})`}}>
            <div className="words">
                <span>{props.words}</span>
            </div>
            <div className="btnLearnMore">Learn More </div>
        </div>
    )
}

export default Slide;