import React from "react";
import {Layout} from "../layout"
import { Routes, Route } from "react-router-dom";


export const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<Layout/>}></Route>
            </Routes>
    )
}
