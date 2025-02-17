import React from "react";
import SearchBar from "./SearchBar";

const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-800 p-5 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Welcome Back!</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">Playlist 1</div>
        <div className="bg-gray-700 p-4 rounded-lg">Playlist 2</div>
        <div className="bg-gray-700 p-4 rounded-lg">Playlist 3</div>
      </div>
    </div>
  );
};

export default MainContent;