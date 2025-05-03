import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingPage from "./components/LoadingPage";
import SkillsSection from "./components/SkillsSection";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ContactSection from "./components/ContactSection";
import SubtleDarkBackground from "./components/SubtleDarkBackground";
import Footer from "./components/Footer";


function App() {
  const [nameDisplay, setNameDisplay] = useState("");
  const [descriptionDisplay, setDescriptionDisplay] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTech, setFilterTech] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 4000); // Matches loading duration
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
    alert("Message sent! Thank you for reaching out.");
    setName("");
    setEmail("");
    setMessage("");
  };

  const projects = [
    {
      id: 1,
      name: "Plan IT",
      description: "PlanIT is an all-encompassing travel companion that goes beyond ordinary trip planning.",
      details: "PlanIT is an all-encompassing travel companion that goes beyond ordinary trip planning. Seamlessly integrating online hotel booking, personalized trip planning, flight/train/bus booking, supporting local vendors, and introducing new features like guided exploration, local photographer booking, and cab services. PlanIT is your go-to platform for an immersive and hassle-free travel experience.",
      image: "/logos/PlanIT.png",
      techStack: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Lakshaysingla13/PlanIT"
    },
    {
      id: 2,
      name: "Budget Buddy",
      description: "A budgeting app to create expense categories, log expenses, and track remaining budgets in each category.",
      details: "This budgeting app allows users to create customized expense categories, add expenses under each category, and easily track the remaining budget. It helps users manage their finances more effectively by offering a clear overview of spending across different areas.",
      image: "/logos/Budget Buddy.jpeg",
      techStack: ["React", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Lakshaysingla13/Budget-Buddy"
    },
    {
      id: 3,
      name: "Password Generator",
      description: "A simple password generator which creates a password for you according to your needs with different length and you can even include numbers and characters if required.",
      details: "A customizable password generator that creates secure passwords based on user preferences. Users can set the desired length and choose to include numbers and special characters. It offers a simple and efficient way to generate strong passwords tailored to individual security needs.",
      image: "/logos/Password Generator.jpeg",
      techStack: ["React", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Lakshaysingla13/Password-Generator"
    }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = filterTech ? project.techStack.includes(filterTech) : true;
    return matchesSearch && matchesTech;
  });

  
  return (
    <>
      <SubtleDarkBackground />

    {/* <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"> */}
      {/* Background Animation */}
      {/* <div className="absolute inset-0 z-0 animate-background-fade bg-gradient-to-br from-teal-500 via-purple-600 to-blue-500 bg-[length:200%_200%]"></div> */}
    {!isLoaded && <LoadingPage />}
    {isLoaded && (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10"
    >
      {/* <div className="min-h-screen bg-gray-900 text-white">
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white relative overflow-hidden"> */}
      {/* Background Animation */}
      {/* <div className="absolute inset-10 animate-gradient"></div> */}

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-10 py-4 px-8 backdrop-blur-md bg-black/50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">L S</h1>
          <div className="space-x-15">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.replace(' ', '').toLowerCase()}`}
                className="text-gray-300 hover:text-white relative group text-lg font-medium transition"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

       {/* Sections with Smooth Scrolling */}
       <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

      {/* Hero Section */}
      <HeroSection />
      {/* <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500 animate-pulse">
          I'm Lakshay Singla
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">
        A passionate Frontend Developer & Tech Enthusiast
        </p>
      </section> */}

      {/* About Me Section  */}
      <AboutMeSection />

      {/* Skill Section*/}
      <SkillsSection />


       {/* Projects Section */}
       <section id="projects" className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search by project name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 w-full md:w-1/3"
          />
          <select
            value={filterTech}
            onChange={(e) => setFilterTech(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 w-full md:w-1/3"
          >
            <option value="">Filter by Tech Stack</option>
            {[...new Set(projects.flatMap((project) => project.techStack))].map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-teal-400 mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-teal-500 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full relative">
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-teal-400 mb-4">
                {selectedProject.name}
              </h3>
              <p className="text-gray-300">{selectedProject.details}</p>
              
              {/* GitHub Link with Icon */}
              {selectedProject.githubLink && (
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-4 text-teal-400 hover:text-white transition"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" className="w-5 h-5" />
                  View on GitHub
                </a>
              )}
              </div>
          </div>
        )}
      </section>

  

<ContactSection />
<Footer />
    </motion.div>
    </motion.div>
    )}
  </>
  );
}

export default App;
