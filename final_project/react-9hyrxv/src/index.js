import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

export default function Menu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="PageOne" element={<PageOne />} />
          <Route path="PageTwo" element={<PageTwo />} />
          <Route path="PageThree" element={<PageThree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Menu />);
