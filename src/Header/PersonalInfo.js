import React from 'react';
import {
  Code,        // For Web Development
  BarChart,    // For Data Analytics
  PenTool,     // For UI/UX Design
  Megaphone,   // For Digital Marketing
  Cloud,       // For Cloud Solutions
  ShieldCheck, // For Cybersecurity
  Database,    // For Database Management
  Wrench,      // For IT Consulting
  Users,       // For Staff Augmentation
  Laptop,      // For Software Development
} from 'lucide-react'; // Import relevant icons

const servicesData = [
  {
    id: 1,
    icon: Code,
    title: 'Web Development',
    description: 'Crafting responsive, high-performance websites and web applications tailored to your business needs.',
  },
  {
    id: 2,
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights, helping you make informed business decisions.',
  },
  {
    id: 3,
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces for an exceptional user experience across all platforms.',
  },
  {
    id: 4,
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategies to boost your online presence, drive traffic, and convert leads into loyal customers.',
  },
  {
    id: 5,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Implementing scalable and secure cloud infrastructure (AWS, Azure, GCP) for optimal performance.',
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with robust security measures and proactive threat detection.',
  },
  {
    id: 7,
    icon: Database,
    title: 'Database Management',
    description: 'Efficient setup, maintenance, and optimization of databases to ensure data integrity and accessibility.',
  },
  {
    id: 8,
    icon: Wrench,
    title: 'IT Consulting',
    description: 'Expert guidance and strategic planning to optimize your technology infrastructure and processes.',
  },
  {
    id: 9,
    icon: Users,
    title: 'Staff Augmentation',
    description: 'Providing skilled professionals to seamlessly integrate with your existing teams for project success.',
  },
  {
    id: 10,
    icon: Laptop,
    title: 'Software Development',
    description: 'Building custom software solutions from concept to deployment, ensuring innovation and quality.',
  },
];

const ServicesPage = () => {
  return (
    // Assuming the purple background is applied to the main page body or a parent of this component.
    // This component remains transparent to let the purple background show through.
    <div id="services" className="min-h-screen flex items-center justify-center px-4 py-12 lg:py-20">
      <div className="w-full max-w-screen-xl bg-transparent rounded-2xl p-8 space-y-12">
        {/* Adjusted text colors for visibility on a purple background */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white dark:text-white mb-10 tracking-tight">
          Our Core <span className="text-blue-300">Services</span> {/* A lighter blue for contrast */}
        </h2>

        {/* Adjusted text color for visibility on a purple background */}
        <p className="text-lg text-center text-gray-200 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          We offer a comprehensive suite of services designed to empower your business
          in the digital age. Explore how we can help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              // Added 'inset-shadow-on-hover' for the custom inset shadow
              className="group relative flex flex-col items-center p-8 bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-200 dark:border-gray-700 hover:border-blue-500 animated-border-card"
            >
              {/* Text colors inside cards should remain appropriate for card's own bg */}
              <div className="text-blue-600 transition-colors duration-300 mb-6">
                <service.icon size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
