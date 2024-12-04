import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./master.css";
import "../Buttons/style.css";
import projects from "../../../constants/data";
const CardProject = ({ selectedFilter, setSelectedFilter }) => {
console.log(projects,"kiasbabsdkjbakjsd");

  const [button, setButton] = useState(selectedFilter);
  const [items, setItems] = useState(projects);
  const filteritems = (categItem) => {
    const updatedItems = projects.filter((curElem) => {
      return curElem.category == categItem;
    });
    setItems(updatedItems);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getButtonNo = (type) => {
    if (type) {
      if (type == 1) {
        filteritems("IT Park");
        setSelectedFilter(1);
      } else if (type === 2) {
        filteritems("Food Industry");
        setSelectedFilter(2);
      } else if (type === 3) {
        filteritems("Data center");
        setSelectedFilter(3);
      } else if (type === 4) {
        filteritems("Mall");
        setSelectedFilter(4);
      } else if (type === 5) {
        filteritems("Banking");
        setSelectedFilter(5);
      } else if (type === 6) {
        filteritems("SEZ");
        setSelectedFilter(6);
      } else {
        setItems(projects);
        setSelectedFilter(0);
      }
    }
  };
  useEffect(() => {
    getButtonNo(button);
  }, [button]);

  return (
    <>
      <div className="project-blog-section">
        <div className="projects-blog-sections">
          <div className="blog-buttons">
            <button
              className={button === 0 ? "active-all" : "project-buttons"}
              onClick={() => {
                setItems(projects);
                setButton(0);
              }}
            >
              All
            </button>
            <button
              className={button === 1 ? "active-all" : "project-buttons"}
              onClick={() => {
                setButton(1);
              }}
            >
              IT park
            </button>
            <button
              className={button === 2 ? "active-all" : "project-buttons"}
              onClick={() => {
                setButton(2);
              }}
            >
              Food industry
            </button>
            <button
              className={button === 3 ? "active-all" : "project-buttons"}
              onClick={() => {
                setButton(3);
              }}
            >
              Data centers
            </button>
            <button
              className={button === 4 ? "active-all" : "project-buttons"}
              onClick={() => {
                setButton(4);
              }}
            >
              Mall
            </button>
            <button
              className={button === 5 ? "active-all" : "project-buttons"}
              onClick={() => {
                setButton(5);
              }}
            >
              Banking
            </button>
            <button
              className={button === 6 ? "active-all" : "project-buttons"}
              onClick={() => {
                setButton(6);
              }}
            >
              SEZ
            </button>
          </div>
          {/* <div className="text-end">
            <select name="state" className="name-label-blog mt-5">
              <option value="volvo" onClick={() => setItems(projects)}>
                All projects
              </option>
              <option value="saab" onClick={() => filteritems("Corporate")}>
                {" "}
                <button>Corporate</button>{" "}
              </option>
              <option value="opel" onClick={() => filteritems("IT/ITES")}>
              IT park
              </option>
              <option value="audi" onClick={() => filteritems("Data centers")}>
              Food industry
              </option>
              <option value="saab" onClick={() => filteritems("Developers")}>
              Data centers
              </option>
              <option value="saab" onClick={() => filteritems("Hospitals")}>
              Mall
              </option>
              <option value="saab" onClick={() => filteritems("Retail")}>
              Banking
              </option>
              <option value="saab" onClick={() => filteritems("Industrial")}>
              SEZ
              </option>
             
            </select>
          </div> */}
        </div>
      </div>
      <div className="card-blog-post-section">
        <div className="card-project-section">
          <div className="card-image-content">
            <div className="row">
              {items.map((elem) => {
                return (
                  <div className="col-lg-4 col-md- project-card">
                    <Link
                      to={`/project-details/${elem?.id}`}
                      onClick={scrollToTop}
                      className="text-color-content"
                    >
                      <div className="cards">
                        <img
                          className="card-img-top mw-100"
                          src={elem?.images}
                          alt="Card image"
                        />
                        <div className="card-body">
                          <button className="completed mt-3">Completed</button>
                          <h4 className="pt-2">{elem?.title}</h4>
                          <h6 className="card-title pt-2">
                            {" "}
                            Location: {elem?.location}
                          </h6>
                          <p className="card-text pt-2">{elem?.information}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProject;
