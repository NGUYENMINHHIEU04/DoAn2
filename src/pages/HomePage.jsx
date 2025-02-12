import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";

const Homepage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Homepage;