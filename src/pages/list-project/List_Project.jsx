import React, { useEffect, useRef, useState } from "react";
import "./List_Project.css"
import { FaEllipsisH } from "react-icons/fa";

const ListProject = ({}) => {
    return (
        <ContainerListProject/>
    );
};

const ContainerListProject = ({}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const dropdownRef = useRef(null);

    const handleDropdownClick = (index) => {
        if (dropdownIndex === index) {
            setDropdownIndex(null);
            setShowDropdown(false);
        } else {
            setDropdownIndex(index);
            setShowDropdown(true);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
                setDropdownIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const list_projects = [
        {
            label: 1,
            name: "Project A",
            created_at: "2025-04-10",
            updated_at: "2025-04-10",
            status: "Active",
            toggle: true
        },
        {
            label: 2,
            name: "Project B",
            created_at: "2025-04-09",
            updated_at: "2025-04-10",
            status: "Inactive",
            toggle: false
        }
    ];

    return (
        <div className="section-list-project">
            <div className="container-title-and-path-list-project">
                <div className="container-title-list-project">
                    <h2>List-Project</h2>
                </div>
                <div className="container-path-list-project">
                    <ul className="unordered-list-list-project">
                        <li className="list-list-project">
                            Users
                        </li>
                        <li className="list-list-project">
                           <span>/</span> project
                        </li>
                        <li className="list-list-project">
                            <span>/</span> list-project
                        </li>
                    </ul>
                </div>
            </div>
            <div className="list-project-header">
                <h3>List Project</h3>
                <button className="btn-create-list-project">Create Project</button>
            </div>
            <div className="list-project-body">
                <table className="table-list-project-body">
                    <thead>
                        <tr className="table-row-head-list-project-body">
                            <th className="table-head-list-project-body">Label</th>
                            <th className="table-head-list-project-body">Project Name</th>
                            <th className="table-head-list-project-body">Create On</th>
                            <th className="table-head-list-project-body">Edit On</th>
                            <th className="table-head-list-project-body">Status</th>
                            <th className="table-head-list-project-body">Toggle</th>
                            <th className="table-head-list-project-body">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list_projects.map((item, index) => (
                            <tr key={index} className="table-row-data-list-project-body">
                                <td className="table-data-list-project">{item.label}</td>
                                <td className="table-data-list-project">{item.name}</td>
                                <td className="table-data-list-project">{item.created_at}</td>
                                <td className="table-data-list-project">{item.updated_at}</td>
                                <td className="table-data-list-project">{item.status}</td>
                                <td className="table-data-list-project">
                                    <label className="switch-table-list-project">
                                        <input type="checkbox" defaultChecked={item.toggle} />
                                        <span className="slider-round-table-list-project"></span>
                                    </label>
                                </td>
                                <td className="table-data-list-project">
                                    <div ref={dropdownRef}>
                                        <FaEllipsisH
                                            className="table-data-icon-list-project"
                                            onClick={() => handleDropdownClick(index)}
                                            style={{ cursor: "pointer" }}
                                        />
                                        {showDropdown && dropdownIndex === index && (
                                            <div className="dropdown-action-list-project">
                                                <div className="dropdown-item">Edit</div>
                                                <div className="dropdown-item">Delete</div>
                                                <div className="dropdown-item">Link</div>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="list-project-bottom"></div>
        </div>
    );
}

export default ListProject;