import "./Sidebar.css";
import { useState, useEffect, useRef  } from "react";
import { FaChevronDown, FaChartPie, FaClipboardList, FaPenAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {

    const [showProjectsSubmenu, setShowProjectsSubmenu] = useState(false);
    const sidebarRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                isCollapsed &&
                showProjectsSubmenu
            ) {
                setShowProjectsSubmenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCollapsed, showProjectsSubmenu]);


    return (
        <div className={`section-sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <div className={`container-sidebar ${isCollapsed ? "collapsed" : ""}`}>
                <div className="container-title-sidebar">
                    <h1 className="title-sidebar">{!isCollapsed && "MyOpen-API"}</h1>
                    <button
                        className="sidebar-menu-toggle"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    ></button>
                </div>

                <div className="container-sidebar-btn-create-project">
                    <button className="btn-sidebar-create-project">Create Project</button>
                    <div className="container-sidebar-btn-create">
                        <FaPenAlt className="sidebar-btn-create-icon" />
                    </div>
                </div>

                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <Link to="/" className="sidebar-link">
                            <FaChartPie className="sidebar-menu-icon" />
                            <span
                                className={`menu-text ${isCollapsed ? "hidden" : ""} ${
                                    location.pathname === "/" ? "active-text" : ""
                                }`}
                                >
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li
                        className={`sidebar-item ${isCollapsed ? "collapsed-hover" : ""}`}
                        ref={sidebarRef}
                    >
                        <div
                            className={`sidebar-link sidebar-toggle ${showProjectsSubmenu ? "active" : ""}`}
                            onClick={() => setShowProjectsSubmenu(!showProjectsSubmenu)}
                        >
                            <div className="sidebar-toggle-label">
                                <FaClipboardList className="sidebar-menu-icon" />
                                <span className={`menu-text ${isCollapsed ? "hidden" : ""}`}>Projects</span>
                            </div>

                            {!isCollapsed && (
                                <FaChevronDown
                                    className={`sidebar-submenu-icon ${showProjectsSubmenu ? "open" : ""}`}
                                />
                            )}
                        </div>

                        {(isCollapsed || showProjectsSubmenu) && (
                            <ul className={`submenu-sidebar ${isCollapsed && showProjectsSubmenu ? "active" : ""}`}>
                                <li>
                                    <Link to="/projects/list" className="submenu-link">List Projects</Link>
                                </li>
                                <li>
                                    <Link to="/projects/create" className="submenu-link">Create Project</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
