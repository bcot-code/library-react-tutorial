import "./App.css"
import Nav from "./components/Nav"
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfor from "./pages/Bookinfor";
import Footer from "./components/Footer";
import { books } from './data';
import {BrowserRouter as Router, Route, } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path ="/" exact component={Home} />
        <Route path ="/books" exact render={() => <Books books={books}/>}/>
        <Route path ="/books/:id" render={() => <BookInfor books={books}/>}/>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
