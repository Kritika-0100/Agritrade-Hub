// import React from "react";
import "./dashboard.css";
import MerchantHeader from "./MerchantLayout/MerchantHeader";

const MerchantDashboard = () => {
    return (
        <div className="dashboard-layout">
            <MerchantHeader />
            <div className="dashboard-content">
                <h1>Welcome to Merchant Dashboard</h1>
            </div>
        </div>
    );
};

export default MerchantDashboard;
