import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AgriConnect from "./pages/AgriConnect";
import HarvestOverCrop from "./pages/HarvestOverCrop";
import AskQuestionPage from "./pages/AskQuestionPage";
import CreatePostPage from "./pages/CreatePostPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import ViewPostPage from "./pages/ViewPostPage";

function App() {
    return (
        <>
            <Header />

            <Routes>
                {/* <Route path="/" element={<HomePage />}></Route> */}
                {/* <Route path="/harvest-over-crop" element={<HarvestOverCrop />}></Route> */}
                {/* <Route path="/bazaar" element={<Bazaar />}></Route> */}

                <Route path="/create-post" element={<CreatePostPage />} />
                <Route path="/ask-question" element={<AskQuestionPage />} />
                <Route path="/profile-settings" element={<ProfileSettingsPage />} />
                <Route path="/post" element={<ViewPostPage />} />
                <Route path="/profile/:userId" element={<ProfilePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/harvest-over-crop" element={<HarvestOverCrop />} />
                <Route path="/agri-connect" element={<AgriConnect />} />
                <Route path="*" element={<h1>404 Not Found Page</h1>} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
