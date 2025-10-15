import React, { useEffect, useState } from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

import { Routes, Route, Outlet } from "react-router-dom";
import FarmerRegistration from "./components/pages/FarmerRegistration";
import MerchantRegistration from "./components/pages/MerchantRegistration";
import Register from "./components/pages/Register";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FarmerDashboard from "./components/modules/dashboard/farmer/Dashboard";
import MerchantDashboard from "./components/modules/dashboard/merchant/Dashboard";
import ProtectedRoute from "./helpers/ProtectedRoutes";
import FarmerProfile from "./components/modules/dashboard/farmer/FarmerProfile";
import MerchantProfile from "./components/modules/dashboard/merchant/MerchantProfile";
import ProductAdd from "./components/modules/product/ProductAdd";
import ProductList from "./components/modules/product/ProductList";
import Toaster from "./components/alerts/Toaster";
import ProductImageAdd from "./components/modules/product/ProductImageAdd";

function App() {
  return (
    <React.Fragment>
      <Toaster />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login message={""} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/farmerreg" element={<FarmerRegistration />} />
        <Route path="/merchantreg" element={<MerchantRegistration />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Modules Route start*/}
        {/* Farmer Routes */}
  <Route
  path="/farmer"
  element={
    <ProtectedRoute endPoint={"/login"} message={"session-expired"} />
  }
>
  <Route path="dashboard" element={<FarmerDashboard />} />
  <Route path="profile" element={<FarmerProfile />} />
  <Route path="manage-products/list" element={<ProductList />} />
  <Route path="manage-products/add" element={<ProductAdd />} />
  <Route
    path="manage-products/upload-image/:product_id"
    element={<ProductImageAdd />}
  />
</Route>

{/* Merchant Routes */}
<Route
  path="/merchant"
  element={
    <ProtectedRoute endPoint={"/login"} message={"session-expired"} />
  }
>
  <Route path="dashboard" element={<MerchantDashboard />} />
  <Route path="profile" element={<MerchantProfile />} />
</Route>


        {/* Modules Route End */}
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
