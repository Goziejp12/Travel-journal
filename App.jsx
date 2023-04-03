import React from "react";
import data from "./components/data";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

export default function App() {
    let dataObj = data.map(items => {
        return (
            <MainPage
                key={items.id}
                items={items} 
            />
        )
    })
    return (
        <div className="layout">
            <Header />
            {dataObj}
        </div>
    )
}