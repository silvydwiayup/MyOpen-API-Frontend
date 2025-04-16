import React, { useState } from "react";
import './Edit_table.css';

const Edit_Table = ({ show, setShow }) => {
    const [tableName, settableName] = useState("");

    if (!show) return null;

    const handleChange = (e) => settableName(e.target.value);
    const handleClose = () => setShow(false);

    return (
        <div className="modal-overlay-edit-table">
            <div className="modal-content-edit-table">
            <button className="btn-close-top-right-edit-table" onClick={handleClose}>×</button>
                <h3>Edit table</h3>
                <div className="input-group-edit-table">
                    <label htmlFor="tableName-edit-table">Edit table Name</label>
                    <input
                        id="tableName-edit-table"
                        type="text"
                        value={tableName}
                        onChange={handleChange}
                        placeholder="Edit table name"
                    />
                </div>

                <div className="modal-buttons-edit-table">
                    <button className="btn-close-edit-table" onClick={handleClose}>Cancel</button>
                    <button className="btn-save-edit-table">Save</button>
                </div>

            </div>
        </div>
    );
};

export default Edit_Table;
