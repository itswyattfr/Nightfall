import React from 'react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Welcome to Nightfall Studios
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Creating digital experiences that inspire and innovate.
        </p>
      </div>

      <div className="mt-16">
        <div className="relative rounded-xl overflow-hidden h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Studio workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Our Latest Project</h2>
            <p className="text-lg text-gray-200">
              Discover how we're pushing the boundaries of digital innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;