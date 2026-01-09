import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CaseStudies from "./pages/CaseStudies";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/casestudies" element={<CaseStudies />} />
      </Routes>
    </>
  );
};

export default App;
