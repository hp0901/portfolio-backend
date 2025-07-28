import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen, // For courses
  Award,    // For achievements
  Edit,     // For edit button
} from 'lucide-react'; // Icons from Lucide React

// Dummy User Data (replace with data from your Redux store or API)
const dummyUser = {
  firstName: 'Harsh',
  lastName: 'Patel',
  email: 'harsh.patel@example.com',
  phone: '+91 98765 43210',
  address: '123 University Rd, Vadodara, Gujarat',
  dateOfBirth: '2000-01-15', // YYYY-MM-DD format
  bio: 'Passionate web developer and DSA enthusiast from Parul University. Currently mastering C++ and aiming for a career in the US tech industry.',
  profilePicture: 'https://randomuser.me/api/portraits/men/88.jpg', // Placeholder image
  coursesEnrolled: 5,
  achievements: 2,
};

const MyProfile = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto my-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6 mb-6 border-gray-200 dark:border-gray-700">
        <img
          src={dummyUser.profilePicture}
          alt={`${dummyUser.firstName} ${dummyUser.lastName}'s Profile`}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div className="text-center md:text-left flex-grow">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {dummyUser.firstName} {dummyUser.lastName}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">{dummyUser.bio}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Mail size={16} /> {dummyUser.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone size={16} /> {dummyUser.phone}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={16} /> {dummyUser.address}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} /> Born: {dummyUser.dateOfBirth}
            </span>
          </div>
        </div>
        {/* Edit Profile Button */}
        <Link
          to="/dashboard/settings/edit-profile" // Assuming this is your edit profile route
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-sm font-semibold mt-4 md:mt-0 md:ml-auto"
        >
          <Edit size={16} /> Edit Profile
        </Link>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-lg flex items-center gap-4 shadow-sm">
          <BookOpen size={32} className="text-blue-600 dark:text-blue-300" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Courses Enrolled</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{dummyUser.coursesEnrolled}</p>
          </div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/30 p-5 rounded-lg flex items-center gap-4 shadow-sm">
          <Award size={32} className="text-green-600 dark:text-green-300" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Achievements</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{dummyUser.achievements}</p>
          </div>
        </div>
      </div>

      {/* About Section (Optional) */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">About Me</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          Harsh is a dedicated student passionate about building efficient and scalable software solutions. With a strong foundation in web development and a growing expertise in Data Structures and Algorithms with C++, he is constantly seeking new challenges and opportunities to apply his skills. He believes in continuous learning and leveraging technology to solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
