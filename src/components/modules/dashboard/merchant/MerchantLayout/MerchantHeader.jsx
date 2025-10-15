import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./header.css";

function MerchantHeader() {
    const navigate = useNavigate();
    const [sessionData, setSessionData] = useState({});

    useEffect(() => {
        if (window.localStorage.getItem("session.data")) {
            const session_data = JSON.parse(
                window.localStorage.getItem("session.data")
            );
            setSessionData(session_data);
        }
    }, []);

    return (
        <React.Fragment>
            <div className="dashboard-sidebar">
                <h4 className="sidebar-title">Merchant Dashboard</h4>
                <nav>
                    <Link to="/merchant/dashboard">Dashboard</Link>
                    <Link to="/merchant/profile">Profile</Link>
                    <Link to="./product/manage-products/list">Manage Products</Link>
                    <Link to="/merchant/orders">Order Management</Link>
                    <Link to="/merchant/quotations">Quotations</Link>
                    <Link to="/merchant/reports">Reports</Link>
                    <Link to="/merchant/settings">Settings</Link>

                    <div className="user-info mt-3">
                        <span>{sessionData?.name || ""}</span>
                        <br />
                        <b>{sessionData?.email || ""}</b>
                    </div>

                    <a
                        href="#"
                        onClick={() => {
                            window.localStorage.clear();
                            navigate("/login");
                        }}
                        className="logout-link"
                    >
                        Logout
                    </a>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default MerchantHeader;
