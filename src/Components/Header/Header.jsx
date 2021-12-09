import React from "react";
import TopHeader from "./TopHeader";
import HeaderTabs from "./HeaderTabs";

const Header = ({ issues = 0 }) => {

    return (
        <header className="issueHeader">
            <TopHeader />
            <HeaderTabs issues={issues} />
        </header>
    )
}

export default Header
