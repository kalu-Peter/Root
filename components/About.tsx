'use client';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm Peter Kalu, a passionate software developer with extensive experience creating
                comprehensive digital solutions across various industries. My journey has taken me
                through diverse projects from healthcare to education, building systems that make a real impact.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, PostgreSQL, and MongoDB,
                always staying current with industry best practices. My expertise spans both frontend
                and backend development, with a strong focus on creating scalable, user-friendly applications.
              </p>
              <p>
                From school management systems to e-commerce platforms, I've delivered solutions
                that streamline operations and enhance user experiences across multiple sectors.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">20+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/pete.JPG"
              alt="Professional Portrait"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <a
          href="/Peter Lugo resume.pdf"
          className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}
