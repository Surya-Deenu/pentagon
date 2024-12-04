import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./style.css";
import { toast } from "react-toastify";
import CustomDropdown from "../customDropdown";
import {
  alphabetValidate,
  initialSpaceValidate,
  phoneNumberValidate,
  spaceValidate,
} from "../../utils/form-validation";

const FormValidation = () => {
  const [loader, setLoader] = useState(false);
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z](([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Enter the valid email"
      )
      .email("Invalid email")
      .required("Email is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number is not valid")
      .required("Mobile is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    requirement: Yup.string().required("Requirement is required"),
  });
  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  return (
    <>
      <div className="form-validate">
        <div className="container">
          <div className="form-valide-content">
            <Formik
              initialValues={{
                name: "",
                email: "",
                mobile: "",
                state: "",
                city: "",
                requirement: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {
                setLoader(true);
                emailjs
                  .send(
                    "service_003yy0y",
                    "template_qa597ga",
                    values,
                    "3y6ATAP6Ckm2kuiuG"
                  )
                  .then(
                    (response) => {
                      resetForm();
                      toast.success("Details submitted successfully");
                      setLoader(false);
                    },
                    (error) => {
                      console.log("FAILED...", error);
                      alert("Failed to send message. Please try again later.");
                    }
                  );
              }}
            >
              {({ values, errors, touched, setFieldValue }) => (
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="email-address">Name*</label>
                      <br />
                      <Field
                        onKeyPress={alphabetValidate}
                        name="name"
                        type="text"
                        className="w-100 name-label mt-3"
                        placeholder="Eg: John Krisinski"
                      />
                      {errors.name && touched.name && (
                        <span className="text-danger">{errors.name}</span>
                      )}
                      <br />
                    </div>
                    <div className="col-md-6">
                      <label className="email-address">Email Address*</label>
                      <br />
                      <Field
                        onKeyPress={spaceValidate}
                        name="email"
                        type="text"
                        className="w-100 name-label mt-3"
                        placeholder="Eg: Johnkrisinski@email.com"
                      />
                      {errors.email && touched.email && (
                        <span className="text-danger">{errors.email}</span>
                      )}
                      <br />
                    </div>
                    <div className="col-md-6">
                      <label className="email-address mt-3">
                        Phone Number*
                      </label>
                      <br />
                      <Field
                        onKeyPress={phoneNumberValidate}
                        name="mobile"
                        type="text"
                        className="w-100 name-label mt-3"
                        placeholder="98765-43210"
                      />
                      {errors.mobile && touched.mobile && (
                        <span className="text-danger">{errors.mobile}</span>
                      )}
                      <br />
                    </div>
                    <div className="col-md-6">
                      <label className="email-address mt-3">State*</label>
                      <br />
                      {/* <Field
                        name="state"
                        as="select"
                        className="w-100 name-label mt-3"
                       
                      >
                        <div  style={{ height: "100px",overflow:"scroll" }}>
                        <option value="">Select</option>
                        {statesOfIndia?.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                        </div>


                      </Field> */}

                      <CustomDropdown
                        values={values.state}
                        options={statesOfIndia}
                        name="state"
                        setFieldValue={setFieldValue}
                      />
                      {errors.state && touched.state && (
                        <span className="text-danger">{errors.state}</span>
                      )}
                      <br />
                    </div>
                    <div className="col-md-6">
                      <label className="email-address mt-3">City*</label>
                      <br />
                      <Field
                        onKeyPress={initialSpaceValidate}
                        name="city"
                        type="text"
                        className="w-100 name-label mt-3"
                        placeholder="City"
                      />
                      {errors.city && touched.city && (
                        <span className="text-danger">{errors.city}</span>
                      )}
                      <br />
                    </div>
                    <div className="col-md-12">
                      <label className="email-address mt-3">
                        Your Requirement*
                      </label>
                      <br />
                      <Field
                        onKeyPress={initialSpaceValidate}
                        name="requirement"
                        as="textarea"
                        cols="130"
                        rows="6"
                        className="w-100 name-label mt-3"
                      />
                      {errors.requirement && touched.requirement && (
                        <span className="text-danger">
                          {errors.requirement}
                        </span>
                      )}
                      <br />
                    </div>
                    <div className="text-center mt-4">
                      <button
                        disabled={loader}
                        type={loader ? "button" : "submit"}
                        className="form-submit-button"
                      >
                        {loader ? (
                          <div class="spinner-border" role="status" />
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
