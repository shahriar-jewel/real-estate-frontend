import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Header & Footer
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// import Pages
import Home from "./Pages/Home";
import RealEstate from "./Pages/RealEstate";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

// import Components
import FilterModal from "./Components/FilterModal/FilterModal";
import LoginModal from "./Components/LoginRegister/LoginModal";
import ForgotPassword from "./Components/LoginRegister/ForgotPassword";
import RegisterModal from "./Components/LoginRegister/RegisterModal";
import { DataProvider } from "./context/GlobalState";

const App = () => {
    const [modalShown, setModalShown] = useState(false);
    const [modalLogin, setModalLogin] = useState(false);
    const [modalForgotPassword, setModalForgotPassword] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);

    return (
        <BrowserRouter>
            {modalShown && (
                <FilterModal
                    onClose={() => {
                        setModalShown(false);
                    }}
                />
            )}

            <Header
                onLogin={() => {
                    setModalLogin(true);
                }}
            />

            {modalLogin && (
                <LoginModal
                    onForgot={() => {
                        setModalForgotPassword(true);
                    }}
                    onRegister={() => {
                        setModalRegister(true);
                    }}
                    onClose={() => {
                        setModalLogin(false);
                    }}
                />
            )}

            {modalForgotPassword && (
                <ForgotPassword
                    onClose={() => {
                        setModalForgotPassword(false);
                    }}
                />
            )}

            {modalRegister && (
                <RegisterModal
                    onLogin={() => {
                        setModalLogin(true);
                    }}
                    onClose={() => {
                        setModalRegister(false);
                    }}
                />
            )}
            <DataProvider>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                onFilterModal={() => {
                                    setModalShown(true);
                                }}
                            />
                        }
                    />
                    <Route
                        path="/real-estate"
                        element={
                            <RealEstate
                                onFilterModal={() => {
                                    setModalShown(true);
                                }}
                            />
                        }
                    />

                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </DataProvider>
            <Footer />
        </BrowserRouter>

    );
};

export default App;
