import React from 'react';

const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-800 p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Good Morning</h2>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-700 p-4 rounded-lg">
            <div className="bg-gray-600 h-32 rounded-lg"></div>
            <h3 className="text-white mt-2">Playlist {i + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;