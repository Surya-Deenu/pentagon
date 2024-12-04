import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import "./style.css";
import { toast } from "react-toastify";
import CustomDropdown from "../../../components/customDropdown";
import {
  alphabetValidate,
  initialSpaceValidate,
  phoneNumberValidate,
  spaceValidate,
} from "../../../utils/form-validation";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number is not valid")
    .required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z](([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Enter the valid email"
    )
    .required("Email is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
});

const FormValidation = () => {
  const [loader, setLoader] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    setLoader(true);
    emailjs
      .send("service_h6ij8rs", "template_vc5d52e", values, "3y6ATAP6Ckm2kuiuG")
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
  };
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
  const convertBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (file) {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      }
    });
  };

  return (
    <div className="form-validate">
      <div className="container">
        <div className="form-valide-content">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <label className="email-address">First Name*</label>
                    <Field
                      onKeyPress={alphabetValidate}
                      type="text"
                      name="firstName"
                      placeholder="Eg: John"
                      className="w-100 name-label mt-3"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="error text-danger"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="email-address">Last Name*</label>
                    <Field
                      onKeyPress={alphabetValidate}
                      type="text"
                      name="lastName"
                      placeholder="Eg: Krisinski"
                      className="w-100 name-label mt-3"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="error text-danger"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="email-address mt-3">Phone Number*</label>
                    <Field
                      onKeyPress={phoneNumberValidate}
                      type="text"
                      name="phone"
                      placeholder="98765-43210"
                      className="w-100 name-label mt-3"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="error text-danger"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="email-address mt-3">Email Address*</label>
                    <Field
                      onKeyPress={spaceValidate}
                      type="text"
                      name="email"
                      placeholder="Eg: john@email.com"
                      className="w-100 name-label mt-3"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error text-danger"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="email-address mt-3">City*</label>
                    <Field
                      onKeyPress={initialSpaceValidate}
                      type="text"
                      name="city"
                      placeholder="City"
                      className="w-100 name-label mt-3"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="error text-danger"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="email-address mt-3">State*</label>
                    {/* <Field
                      as="select"
                      name="state"
                      className="w-100 name-label mt-3"
                    >
                      <option value="">Select</option>
                      <option value="Tamilnadu">Tamilnadu</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                    </Field> */}
                    <CustomDropdown
                      options={statesOfIndia}
                      values={values?.state}
                      setFieldValue={setFieldValue}
                      name="state"
                    />
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="error text-danger"
                    />
                  </div>

                  {/* <div className="col-md-6">
                    <label className="email-address mt-3">Resume*</label>
                    <input
                      type="file"
                      className="form-control upload-file-button mt-3"
                      onChange={async(event) =>{
                        setFieldValue("resume", event.currentTarget.files[0])
                        setState(await convertBase64(event.currentTarget.files[0]))
                      }}
                    />
                    <ErrorMessage
                      name="resume"
                      component="div"
                      className="error text-danger"
                    />
                  </div> */}

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
  );
};

export default FormValidation;
