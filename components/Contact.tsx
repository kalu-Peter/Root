'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xldldyyr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: '',
          budget: ''
        });
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 5000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">peterkalu41@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+2547 410 80676</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Mombasa, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/kalu-Peter" className="w-12 h-12 bg-gray-100 hover:bg-gray-900 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                  <i className="ri-github-line text-gray-700 group-hover:text-white"></i>
                </a>
                <a href="https://www.linkedin.com/in/kalu-peter/" className="w-12 h-12 bg-gray-100 hover:bg-gray-900 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                  <i className="ri-linkedin-line text-gray-700 group-hover:text-white"></i>
                </a>
                <a href="https://x.com/Web_WizKid" className="w-12 h-12 bg-gray-100 hover:bg-gray-900 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                  <i className="ri-twitter-line text-gray-700 group-hover:text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-gray-900 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                  <i className="ri-dribbble-line text-gray-700 group-hover:text-white"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-sm appearance-none pr-8"
                    >
                      <option value="">Select Project Type</option>
                      <option value="website">Website Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="web-app">Assignment</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="database">Database Development</option>
                      <option value="api">API Development</option>
                      <option value="consulting">Consulting</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-sm appearance-none pr-8"
                    >
                      <option value="">Select Budget</option>
                      <option value="5k-10k">Ksh 5,000 - Ksh 10,000</option>
                      <option value="10k-20k">Ksh 10,000 - Ksh 20,000</option>
                      <option value="20k-50k">Ksh 20,000 - Ksh 50,000</option>
                      <option value="over-50k">Over Ksh 50,000</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-600"></i>
                  </div>
                  <span className="text-green-700">Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-close-line text-red-600"></i>
                  </div>
                  <span className="text-red-700">Sorry, there was a problem sending your message. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
