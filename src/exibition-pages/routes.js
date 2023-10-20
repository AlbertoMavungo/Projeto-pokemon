import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListPokes } from "./home";
import { AllDetails } from './all-details';
import { ThemeContext } from "../components/contexs/theme-context";
import { styled } from "styled-components";

const AppRoutes = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Div style={{backgroundColor: theme}}>
            <BrowserRouter >
                <Routes>
                    <Route exact path='/' element={<ListPokes />} />
                    <Route exact path="/poke/:id" element={<AllDetails />} />
                </Routes>
            </BrowserRouter>
        </Div>
    )
}

const Div = styled.div`
    min-height:100vh
`
export { AppRoutes }