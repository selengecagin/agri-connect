import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        {/* <Route path="/agri-connect" element={<AgriConnect />}></Route> */}
        {/* <Route path="/harvest-over-crop" element={<HarvestOverCrop />}></Route> */}
        {/* <Route path="/bazaar" element={<Bazaar />}></Route> */}

        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="*" element={<h1>404 Not Found Page</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
