import React from "react";
import Banner from "./Banner/index";
// import Buttons from './Buttons/index'
import CardProject from "./Cards";

const project = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <>
      <div>
        <Banner />
        <CardProject
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
    </>
  );
};

export default project;
