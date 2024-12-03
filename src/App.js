
import './App.css';
import Header from './container/Header/index'
import Footer from './container/Footer';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUS/index'
import Project from './pages/Projects'
import Careers from './pages/Careers/Careers'
import ContactUs from './pages/ContactUs'
import BlogPostDetail from './pages/ProjectDetails/index'
import { Routes, Route } from "react-router-dom"
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <div>
          <Header />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/project-details/:id" element={<BlogPostDetail />} />
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
