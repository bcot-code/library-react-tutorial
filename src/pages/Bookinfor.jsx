import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/ui/rating'
import Pricing from '../components/ui/pricing'
import Book from '../components/ui/books'

const Bookinfor = ({books}) => {
   const {id} = useParams()
      //in js tries to find the value is a number using (+) 
      const book = books.find(book => +book.id === +id)
  return (
    <div id='books__body'>
      <main id='books__main'>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to ="/books" className='book__link'>
                <FontAwesomeIcon icon="arrow-left"/>
              </Link>
              <Link to="/books" className='book__link'>
                <h2 className='book__select--title--top'>
                  BOOKS
                </h2>
              </Link>
            </div>
            <div className='book__selected'>
              <figure className='book__select--figure'>
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className='book__selected--description'>
                <h2 className='book__selected--title'>{book.title}</h2>
                  <Rating rating={book.rating}/>
                <div className='book__selected--price'>
                  <Pricing originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                </div>
                <div className='book__summary'>
                  <h3 className='book__summary--title'>
                    Summary
                  </h3>
                  <p className='book__summary--para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis quae rem officia animi laudantium totam omnis quam suscipit. Magnam provident dolorum omnis corporis eveniet molestiae reprehenderit doloremque expedita iure.
                  </p>
                  <p className='book__summary--para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis quae rem officia animi laudantium totam omnis quam suscipit. Magnam provident dolorum omnis corporis eveniet molestiae reprehenderit doloremque expedita iure.
                  </p>
                </div>
                <button className="btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='books__container'>
          <div className='row'>
            <div className="book__selected--top">
              <h2 className='book__selected--title--top'>
                Recommended Books
              </h2>
            </div>
            <div className='books'>
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0,4)
                .map((book) => (<Book book={book} key={book.id} />))
              }
              </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Bookinfor