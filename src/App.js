import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Info from "./components/Info";
import CitySays from "./components/CitySays";
import Demands from "./components/Demands";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Info />
                <CitySays />
                <Demands />
            </main>
            <Footer />
        </div>
    );
}

export default App;
