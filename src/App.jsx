import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Facility from "./pages/Facility";
import Simulator from "./pages/Simulator";
import Pricing from "./pages/Pricing";
import Access from "./pages/Access";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/access" element={<Access />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Layout>
    </Router>
  );
}