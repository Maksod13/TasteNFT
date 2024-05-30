import React from "react";
import { Layout } from "../layout"
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/MainPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}
