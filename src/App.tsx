import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AgriConnect from "./pages/AgriConnect";
import HarvestOverCrop from "./pages/HarvestOverCrop";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import ProfilePage from "./pages/ProfilePage";
import AskQuestionPage from "./pages/AskQuestionPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        {/* <Route path="/harvest-over-crop" element={<HarvestOverCrop />}></Route> */}
        {/* <Route path="/bazaar" element={<Bazaar />}></Route> */}

        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/agri-connect" element={<HarvestOverCrop />}></Route>
        <Route path="/harvest-over-crop" element={<AgriConnect />}></Route>
        <Route path="/ask-question" element={<AskQuestionPage />} />
        <Route
          path="/profile-settings"
          element={<ProfileSettingsPage />}
        ></Route>
        <Route path="/profile-page" element={<ProfilePage />}></Route>

        <Route path="*" element={<h1>404 Not Found Page</h1>} />
      </Routes>

      <Footer />
    </>
  );
}{

}

export default App;
