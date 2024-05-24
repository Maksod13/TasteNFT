import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../layout";

export const AppRouter = () => {
    return (
        <Router basename="/TasteNFT">
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </Router>
    );
};