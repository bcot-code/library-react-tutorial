import React, { useState } from 'react'
import Books from '../components/ui/books';

const Book = ({books: initialBooks}) => {
    const [books, setBooks] = useState(initialBooks)
    function filterBooks(filter){
        console.log(filter)
        if (filter === 'LOW_TO_HIGH'){
            setBooks(books.slice().sort((a,b) => (a.salePrice|| a.originalPrice) - (b.salePrice || b.originalPrice)))
        }
        if(filter === 'HIGH_TO_LOW'){
            setBooks(books.slice().sort((a,b) => (b.salePrice || b.originalPrice) - (a.salesPrice || a.originalPrice)))
        }
        if(filter === 'RATING'){
            setBooks(books.slice().sort((a,b) => b.rating - a.rating))
        }
    }
  return (
    <div id='books__body'>
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All books</h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event)=>filterBooks(event.target.value)}>
                                <option value="DEFAULT"  disabled>Sort</option>
                                <option value="LOW_TO_HIGH">Low to High</option>
                                <option value="HIGH_TO_LOW">High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {
                                books.map((book) => (<Books book ={book} key={book.id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}
export default Book