import React from 'react';
import { Users, Rocket, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're a team of passionate creators, innovators, and problem solvers dedicated to pushing the boundaries of digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-gray-900 rounded-xl">
          <Users className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Our Team</h3>
          <p className="text-gray-400">
            A diverse group of experts bringing unique perspectives and skills to every project.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl">
          <Rocket className="w-12 h-12 text-indigo-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
          <p className="text-gray-400">
            To create innovative digital solutions that transform and inspire.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl">
          <Code className="w-12 h-12 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Our Approach</h3>
          <p className="text-gray-400">
            Combining cutting-edge technology with creative excellence.
          </p>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Our team"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-xl text-white max-w-3xl">
            "We believe in the power of technology to create meaningful change and lasting impact."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;