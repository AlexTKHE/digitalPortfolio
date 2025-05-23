import { useState } from "react";
import { cn } from "../lib/utils";

{/* skills I want to have make an array make an object for each skills and a level that I feel like I know it
    should be chill */}
type Skill = {
    name: String;
    level: number;
    category: String;
}

const skills: Skill[] = [

    // Frontend
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "Tailwind CSS", level: 75, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "HTML", level: 85, category: "Frontend" },
  { name: "Responsive Design", level: 70, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "Git/GitHub", level: 85, category: "Backend" },
  { name: "API Integration", level: 65, category: "Backend" },
  { name: "Java", level: 90, category: "Backend" },
  { name: "Problem Solving", level: 95, category: "Backend" },
  { name: "Learning Speed", level: 95, category: "Backend" },
  { name: "System Thinking", level: 75, category: "Backend" },

  // Graphic Design
  { name: "Logo Design", level: 95, category: "Graphic Design" },
  { name: "Brand Identity", level: 90, category: "Graphic Design" },
  { name: "UI/UX Design", level: 90, category: "Graphic Design" },
  { name: "Typography", level: 85, category: "Graphic Design" },
  { name: "Visual Storytelling", level: 95, category: "Graphic Design" },

  // Lab Experience / Chemistry
  { name: "Analytical Thinking", level: 95, category: "Lab Experience" },
  { name: "Lab Equipment Handling", level: 80, category: "Lab Experience" },
  { name: "Data Analysis", level: 85, category: "Lab Experience" },
  { name: "Safety Protocols", level: 90, category: "Lab Experience" },
  { name: "Scientific Reporting", level: 85, category: "Lab Experience" },
  { name: "Technical Documentation", level: 85, category: "Lab Experience" },

  // Tools
  { name: "Adobe Photoshop", level: 90, category: "Tools" },
  { name: "Figma", level: 90, category: "Tools" },
  { name: "AutoCAD", level: 85, category: "Tools" },
  { name: "3D Printing", level: 85, category: "Tools" },
  { name: "Adobe Inventor", level: 80, category: "Tools" },
]

const categories = ["all", "Frontend", "Backend", "Graphic Design", "Tools", "Lab Experience"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Frontend");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key = {key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-large shadow-xs card-hover"> 
                        <div className="text-left mb-4"> 
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                            style={{width: skill.level + "%"}}/>
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}