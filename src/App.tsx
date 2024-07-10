import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AgriConnect from "./pages/AgriConnect";
import HarvestOverCrop from "./pages/HarvestOverCrop";
import AskQuestionPage from "./pages/AskQuestionPage.tsx";
import CreatePostPage from "./pages/CreatePostPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ProfileSettingsPage from "./pages/ProfileSettingsPage.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HarvestOverCrop />}></Route>
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/ask-question" element={<AskQuestionPage />} />
        <Route
          path="/profile-settings"
          element={<ProfileSettingsPage />}
        ></Route>
        <Route path="/profile-page" element={<ProfilePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/agri-connect" element={<HarvestOverCrop />}></Route>
        <Route path="/harvest-over-crop" element={<AgriConnect />}></Route>
        <Route path="*" element={<h1>404 Not Found Page</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
