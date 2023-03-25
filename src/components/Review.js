import "./styles/Review.css"

function Review(props) {
    const { img_url, full_name, content, ratings } = props

    return (
        <div className="review">
            <div className="review__left">
                <img src={img_url} alt="" />
            </div>
            <div className="review__right">
                <p className="review__name">{full_name}</p>
                <p className="review__content">{content}</p>
                <p className="review__ratings">{
                    new Array(ratings).fill("").map((element, i) => (
                        <span key={i}>⭐</span>
                    ))
                }</p>
            </div>
        </div>
    )
}

export default Review