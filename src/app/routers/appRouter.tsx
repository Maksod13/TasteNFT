import { Layout } from "../layout"
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/MainPage";
import { ProfileCard } from "../../features/ProfileCard";
import { About } from "../../pages/AboutPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { ViewProfilePopUp } from "../../features/profile/profilePopUps/profileShow";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" Component={About} />
                <Route path="/" Component={ProfileCard} />
                <Route path="/" element={<ViewProfilePopUp onClose={() => { }} onEditProfile={() => { }} onCreateArtwork={() => { }} />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    )
}
