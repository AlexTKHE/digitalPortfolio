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

    //frontend stuff
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},

    //backend stuff
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},
    {name: "Work Ethic", level:95, category: "Frontend"},

    //graphic design stuff
    {name: "Alex", level:95, category: "Backend"},
    {name: "Work Ethic", level:95, category: "Backend"},
    {name: "Work Ethic", level:95, category: "Backend"},
    {name: "Work Ethic", level:95, category: "Backend"},
    {name: "Work Ethic", level:95, category: "Backend"},
    {name: "Work Ethic", level:95, category: "Backend"},
    {name: "Work Ethic", level:95, category: "Backend"},

    //lab stuff chemistry stuff
    {name: "Work Ethic", level:95, category: "Tools"},
    {name: "Work Ethic", level:95, category: "Tools"},
    {name: "Work Ethic", level:95, category: "Tools"},
    {name: "Work Ethic", level:95, category: "Tools"},
    {name: "Work Ethic", level:95, category: "Tools"},
    {name: "Work Ethic", level:95, category: "Tools"},
    {name: "Work Ethic", level:95, category: "Tools"},

    //tools (add figma)
    {name: "Work Ethic", level:95, category: "Lab Expierence"},
    {name: "Work Ethic", level:95, category: "Lab Expierence"},
    {name: "Work Ethic", level:95, category: "Lab Expierence"},
    {name: "Work Ethic", level:95, category: "Lab Expierence"},
    {name: "Work Ethic", level:95, category: "Lab Expierence"},
]

const categories = ["all", "Frontend", "Backend", "Tools", "Lab Expierence"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

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