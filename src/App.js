import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* Index route */}
          <Route index element={<Home />} />
          {/* App routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
