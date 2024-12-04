import "./App.css";
import Header from "./container/Header/index";
import Footer from "./container/Footer";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUS/index";
import Project from "./pages/Projects";
import Careers from "./pages/Careers/Careers";
import ContactUs from "./pages/ContactUs";
import BlogPostDetail from "./pages/ProjectDetails/index";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const router = useLocation();
  console.log(router, "iuavsduauodvgoasbf");

  useEffect(() => {
    if (
      !router?.pathname?.includes("project-details") &&
      !router?.pathname?.includes("projects")
    ) {
      setSelectedFilter(0);
    }
  }, [router?.pathname]);
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/projects"
            element={
              <Project
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            }
          />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/project-details/:id"
            element={<BlogPostDetail selectedFilter={selectedFilter} />}
          />
        </Routes>
        <Footer />
        <div className="toasterr">
          <ToastContainer
            limit={1}
            autoClose={2000}
            transition={Zoom}
            pauseOnFocusLoss={false}
            newestOnTop
            hideProgressBar={true}
          />
        </div>
      </div>
    </>
  );
}

export default App;
