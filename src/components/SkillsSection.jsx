import { motion } from "framer-motion";

function SkillsSection() {
  const skills = [
    { id: 1, name: "JavaScript", logo: "/logos/javascript.jpeg", description: "A versatile language for web development." },
    { id: 2, name: "React.js", logo: "/logos/react.png", description: "A JavaScript library for building user interfaces." },
    { id: 3, name: "Tailwind CSS", logo: "/logos/TailwindCSS.png", description: "Styling websites with cascading style sheets." },
    { id: 4, name: "Node.js", logo: "/logos/NodeJS.png", description: "JavaScript runtime for backend development." },
    { id: 5, name: "HTML", logo: "/logos/HTML.png", description: "The standard markup language for web development." },
    { id: 6, name: "Git/GitHub", logo: "/logos/github.png", description: "Version control and collaborative coding platform." },
    { id: 7, name: "Figma", logo: "/logos/figma.png", description: "A collaborative design tool for modern creatives." },
    { id: 8, name: "C", logo: "/logos/c.png", description: "A foundational and efficient programming language for modern system development." },
    { id: 9, name: "C++", logo: "/logos/c++.png", description: "A powerful and efficient programming language for modern software development." },
    { id: 10, name: "DSA", logo: "/logos/DSA.png", description: "A structured approach to problem-solving for modern developers." },
  ];

  return (
    <section id="skills" className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="relative w-full aspect-square bg-gray-800/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="text-base md:text-lg font-bold text-teal-400">
              {skill.name}
            </h3>
            {/* Pop-up Description */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gray-900/95 rounded-lg opacity-0 text-center p-4 transition-opacity duration-300 hover:opacity-100"
            >
              <p className="text-sm text-gray-300">{skill.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
