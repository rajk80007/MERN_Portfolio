// src/components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; 2024 YourName. All rights reserved.</p>
      <div className="space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">LinkedIn</a>
        {/* Add more links */}
      </div>
    </footer>
  );
};

export default Footer;
