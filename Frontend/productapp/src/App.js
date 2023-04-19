import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Addproducts from './components/Products/Addproducts';
import Navbar from './components/Navbar/Navbar';
import ProductHome from './components/Products/ProductHome';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div>
       <Router>
        <div className="App">
        <Navbar/>
          <Routes>
          <Route path="/" element={<ProductHome />} />
          <Route path="/search" element={<SearchBar />} />
            <Route path="/Addproducts" element={<Addproducts />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
