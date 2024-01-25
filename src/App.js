// Importing the CSS file to apply styles
import "./App.css";

// Importing necessary components from the react-router-dom library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing custom page components
import { Home, About, FindJobs } from './Pages';

// Main App component
function App() {
  return (
    // Setting up the BrowserRouter for client-side routing
    <Router>
      {/* Main container div with specified class names */}
      <div className="App bg-secondary">
        {/* Defining routes using the Routes component */}
        <Routes>
          {/* Route for the home page */}
          <Route exact path="/" element={<Home />} />
          {/* Route for the about page */}
          <Route exact path="/about" element={<About />} />
          {/* Route for the findjobs page */}
          <Route exact path="/findjobs" element={<FindJobs />} />
        </Routes>
      </div>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
