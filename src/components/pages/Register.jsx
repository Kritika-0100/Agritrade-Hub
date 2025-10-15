import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <React.Fragment>
      <div className="container-fluid bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Join Our Platform</h2>
          <p className="text-muted mb-5">
            Choose your role below and get started with quick registration.
            Whether you are a <strong>Farmer</strong> looking to sell your produce
            or a <strong>Merchant</strong> looking for reliable suppliers,
            we’ve got you covered.
          </p>

          <div className="justify-content-center">
            <div className="container for-section m-5">
              <div className="row mt-5 m-auto">
                <div className="col-sm-1"></div>

                {/* Farmer */}
                <div className="col-sm-4">
                  <div className="col-sm for-farmers text-start">
                    <h4 className="text-center">
                      <u>For Farmers</u>
                    </h4>
                    <ul>
                      <li>Easy product listing</li>
                      <li>Direct chat with buyers</li>
                      <li>No hidden charges</li>
                    </ul>
                    <button className="btn-primary-custom w-100">
                      <Link to="/farmerreg" className="text-white text-decoration-none">
                        Farmer Registration
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="col-sm-2"></div>

                {/* Merchant */}
                <div className="col-sm-4">
                  <div className="col-sm for-farmers text-start">
                    <h4 className="text-center">
                      <u>For Merchants</u>
                    </h4>
                    <ul>
                      <li>Easy product listing and availability</li>
                      <li>Direct chat with Farmers</li>
                      <li>No hidden charges</li>
                    </ul>
                    <button className="btn-primary-custom w-100">
                      <Link to="/merchantreg" className="text-white text-decoration-none">
                        Merchant Registration
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="col-sm-1"></div>
              </div>
            </div>
          </div>

          {/* Login CTA - stays centered */}
          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="fw-bold text-decoration-none">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
