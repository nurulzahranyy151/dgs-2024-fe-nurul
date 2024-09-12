import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Finance from './component/Finance';
import CategoryList from './component/CategoryList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/finance" element={<Finance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
