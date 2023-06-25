


const ColumnSection = (props) => {
    return (
        <div className="parentOfSections" style={{backgroundImage: `url(${props.image})`}}>
                    <div className="columnAllWords">
                        <div className="columnTitle">
                            {props.title}
                        </div>
                        <div className="columnWords">
                            <p>{props.words}</p>
                        </div>
                    </div>
                    <span className="columnButton">{props.button}</span>
        </div>
    )
}

export default ColumnSection;