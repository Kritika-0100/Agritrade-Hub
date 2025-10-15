import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { userApiService } from "../../api/userApi";

const MerchantRegistration = () => {
  const [step, setStep] = useState(1);

  // Combined state for all inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    companyName: "",
    businessType: "",
    gstNo: "",
    address: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validation for Step 1
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile is required";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Invalid mobile number";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validation for Step 2
  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.businessType.trim()) newErrors.businessType = "Business type is required";
    if (!formData.gstNo.trim()) newErrors.gstNo = "GST number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    const merchantRegisterData = {
      name: formData.firstName + " " + formData.lastName,
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      password: formData.password.trim(),
      role: "merchant",
      company_name: formData.companyName.trim(),
      business_type: formData.businessType.trim(),
      gst_no: formData.gstNo.trim(),
      address: formData.address.trim(),
    };

    try {
      // Make sure RegisterMerchant returns a Promise
      await userApiService.RegisterMerchant(merchantRegisterData);
      alert("Merchant registered successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        companyName: "",
        businessType: "",
        gstNo: "",
        address: "",
        termsAccepted: false,
      });
      setStep(1);
    } catch (err) {
      console.error(err);
      alert("Registration failed!");
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <h1 className="text-center mb-4">Merchant Registration</h1>

        <form onSubmit={handleSubmit} className="merchant-form p-4 border rounded bg-white shadow-sm">
          {/* Step indicator */}
          <div className="text-center mb-4">
            <span className="badge bg-primary me-2">{step === 1 ? "Step 1" : "✔"}</span>
            <span className="badge bg-secondary">{step === 2 ? "Step 2" : ""}</span>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="form-group mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>

              <div className="form-group mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </div>

              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="form-group mb-3">
                <label>Mobile No</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              </div>

              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <div className="text-center">
                <button type="button" className="btn btn-primary px-4" onClick={handleNext}>
                  Next →
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div className="form-group mb-3">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.companyName && <small className="text-danger">{errors.companyName}</small>}
              </div>

              <div className="form-group mb-3">
                <label>Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Distributor">Distributor</option>
                </select>
                {errors.businessType && <small className="text-danger">{errors.businessType}</small>}
              </div>

              <div className="form-group mb-3">
                <label>GST Number</label>
                <input
                  type="text"
                  name="gstNo"
                  value={formData.gstNo}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.gstNo && <small className="text-danger">{errors.gstNo}</small>}
              </div>

              <div className="form-group mb-3">
                <label>Company Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="form-control"
                ></textarea>
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </div>

              <div className="form-group mb-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  style={{ width: "14px", height: "14px" }}
                  className="form-check-input"
                />
                <label className="form-check-label ms-2">
                  I Accept the <NavLink to="/terms-conditions">Terms and Conditions</NavLink>
                </label>
              </div>
              {errors.termsAccepted && <small className="text-danger">{errors.termsAccepted}</small>}

              <div className="text-center">
                <button type="button" className="btn btn-secondary me-2" onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button type="submit" className="btn btn-success px-4">
                  Register
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default MerchantRegistration;
