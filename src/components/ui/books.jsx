import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import Pricing from "./pricing";

const Book = ({book}) => {
 return (
    <div className="book">
        <Link to={`/books/${book.id}`}>
            <figure className='book__img--wrapper'>
                {/* if you cant use a string is when using .../ to asset to your file 
                but if its external web then theyll be no prob!*/}
                <img src={book.url} alt="" className="book__img" />
            </figure>
        </Link>
        <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">{book.title}</Link>
        </div>
        <Rating rating={book.rating}/>
        <Pricing salePrice={book.salePrice} originalPrice={book.originalPrice}/>
    </div>
   );
};
export default Book


