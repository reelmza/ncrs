import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/FRSC";
import NIMC from "./routes/NIMC";
import FRSC from "./routes/FRSC";
import NIS from "./routes/NIS";
import INEC from "./routes/INEC";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/NIMC" element={<NIMC />} />
          <Route path="/FRSC" element={<FRSC />} />
          <Route path="/NIS" element={<NIS />} />
          <Route path="/INEC" element={<INEC />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
