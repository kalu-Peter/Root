"use client";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Application Development",
    description:
      "Full-stack web applications built with modern technologies like React, Node.js, and PostgreSQL. Custom solutions tailored to your business needs.",
    icon: "ri-computer-line",
    features: [
      "Custom Frontend Development",
      "Backend API Design",
      "Database Architecture",
      "Responsive Design",
      "Performance Optimization",
    ],
    startingPrice: "Ksh 40,000",
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce platforms with payment integration, inventory management, and admin dashboards for online businesses.",
    icon: "ri-shopping-cart-line",
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Management",
      "Analytics Dashboard",
    ],
    startingPrice: "Ksh 50,000",
  },
  {
    id: 3,
    title: "Database Design & Development",
    description:
      "PostgreSQL database design, optimization, and migration services. Efficient data structures for scalable applications.",
    icon: "ri-database-2-line",
    features: [
      "Database Schema Design",
      "Query Optimization",
      "Data Migration",
      "Backup Solutions",
      "Performance Tuning",
    ],
    startingPrice: "Ksh 50,000",
  },
  {
    id: 4,
    title: "System Architecture Consulting",
    description:
      "Technical consulting for system architecture, technology stack selection, and scalability planning for growing businesses.",
    icon: "ri-settings-3-line",
    features: [
      "Architecture Planning",
      "Technology Selection",
      "Scalability Assessment",
      "Security Audit",
      "Performance Review",
    ],
    startingPrice: "Ksh 20,000/hour",
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, updates, and technical support for existing applications to ensure optimal performance and security.",
    icon: "ri-tools-line",
    features: [
      "Regular Updates",
      "Bug Fixes",
      "Security Patches",
      "Performance Monitoring",
      "24/7 Support",
    ],
    startingPrice: "Ksh 10,000/month",
  },
];

export default function Services() {
  interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    features: string[];
    startingPrice: string;
  }
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development services to bring your digital projects to
            life. From concept to deployment, I provide end-to-end solutions for
            your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  {service.startingPrice}
                </span>
                <div className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
                  <span className="text-sm mr-2">Learn More</span>
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                      <i
                        className={`${selectedService.icon} text-white text-xl`}
                      ></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-3">
                          <i className="ri-check-line text-green-600"></i>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="text-3xl font-bold text-gray-900">
                      {selectedService.startingPrice}
                    </div>
                  </div>
                  <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements
              and create a tailored solution that fits your needs perfectly.
            </p>
            <a
              href="#contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap text-lg font-semibold inline-block"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
