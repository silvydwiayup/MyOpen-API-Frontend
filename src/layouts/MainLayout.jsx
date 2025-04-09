import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="app-layout">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div className={`main-content-main-layout ${isCollapsed ? "collapsed" : "expanded"}`}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
