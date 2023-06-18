


const Slide = (props) => {
    return (
        <div className="slide" style={{backgroundImage: `url(${props.image})`}}>
            <div className="words">
                <span>{props.words}</span>
            </div>
            <div className="btnLearnMore"></div>
        </div>
    )
}

export default Slide;