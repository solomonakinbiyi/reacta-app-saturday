import "./styles/Review.css"

function Review() {
    return (
        <div className="review">
            <div className="review__left">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
            </div>
            <div className="review__right">
                <p className="review__name">John Doe</p>
                <p className="review__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed. Nulla, dolorem officia quo culpa quasi earum consequatur expedita. Vero.</p>
                <p className="review__ratings">⭐⭐⭐⭐⭐</p>
            </div>
        </div>
    )
}

export default Review