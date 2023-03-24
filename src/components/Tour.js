import { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteTours }) => {

    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour">
            <img src={image} alt={name} />
            <span className="price">$ {price}</span>
            <div className="tour-info">
                <h4>{name}</h4>
                <p>{
                    readMore? info : `${info.substring(0, 200)}...`
                    }
                    <button className="read-more" onClick={()=>setReadMore(!readMore)}>
                        { readMore? 'Show Less' : 'Read More' }
                    </button> 
                </p>
                <button className="delete-btn"
                    onClick={()=>deleteTours(id)}>Not Interested</button>
            </div>
        </article>
    );
};
export default Tour;