import React, { useEffect, useState } from "react";
import "./style.css";
const CustomDropdown = ({ options, name, setFieldValue,values }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    setFieldValue(name, value);
  };
useEffect(() => {
  setSelectedValue(values);
},[values])
  useEffect(() => {
    const handleClickOutside = (event) => {
      setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="custom-dropdown"
      onClick={(event) => event.stopPropagation()}
    >
      <div
        className="dropdown-header position-relative"
        onClick={toggleDropdown}
      >
        {selectedValue || "Select"}
      </div>
      {isOpen && (
        <div
          className="dropdown-list position-absolute"
          style={{
            maxHeight: "300px",
            overflowY: "scroll",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
