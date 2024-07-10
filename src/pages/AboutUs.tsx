import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100 p-6">
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to{" "}
          <span className="font-semibold text-green-800">AgriConnect</span>, the
          social media platform designed exclusively for agriculture enthusiasts
          and professionals. Our mission is to connect people who share a
          passion for agriculture, enabling them to share knowledge, ideas, and
          experiences.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          At <span className="font-semibold text-green-800">AgriConnect</span>,
          we believe that collaboration and communication are key to advancing
          the field of agriculture. Whether you are a farmer, researcher,
          student, or simply someone interested in agriculture, our platform
          provides a space for you to connect with like-minded individuals.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our features include discussion forums, news updates, event
          notifications, and more. Join our community today and be part of the
          conversation that is shaping the future of agriculture.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for being a part of{" "}
          <span className="font-semibold text-green-800">AgriConnect</span>.
          Together, we can cultivate a better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
