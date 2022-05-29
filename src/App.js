import "./App.css";
import Homepage from "./pages/home/homepage.component";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import PreLoader from "./components/preloader/preloader.component";
import BackToTopButton from "./components/back-to-top/back-to-top.component";
import { lazy, Suspense } from "react";
import Contact from "./pages/contact/contact.component";
import About from "./pages/about/about.component";

const HomePage = lazy(() => import("./pages/home/homepage.component"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
