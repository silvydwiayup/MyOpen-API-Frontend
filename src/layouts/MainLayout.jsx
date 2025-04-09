import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="app-layout">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div
                className="main-content"
                style={{
                    marginLeft: isCollapsed ? "60px" : "34vh",
                    transition: "margin-left 0.3s ease-in-out",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
