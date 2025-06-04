import "./App.css"
import Nav from "./components/Nav"
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfor from "./pages/Bookinfor";
import Cart from './pages/Cart';
import Footer from "./components/Footer";
import { books } from './data';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { useEffect, useState } from "react";



function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book){
    setCart([...cart, book])
  }
  
  useEffect(() => {
    console.log(cart);
  }, [cart])
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path ="/" exact component={Home} />
        <Route path ="/books" exact render={() => <Books books={books}/>}/>
        <Route path ="/books/:id" render={() => <BookInfor books={books} addToCart={addToCart}/>}/>
        <Route path ="/cart" render={() => <Cart books={books}/>}/>
        <Footer />
      </div>
    </Router>
    
  );
}
// const dupItem = cart.find(item => +item.id === +book.id)
    // if(dupItem){
    //   setCart(cart.map(item => {
    //     if(item.id === dupItem.id){
    //       return{
    //         ...item,
    //         quantity: item.quantity + 1,
    //       }
    //     } else {
    //       return item
    //     }
    //   }))
    // } else{
    //   setCart([...cart, {...book, quantit:1}])
    // }
    // this on top david says "this will only confuse the devs? so why make it this way...."
export default App;
