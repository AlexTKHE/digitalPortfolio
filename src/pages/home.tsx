import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";

export const Home = () => {

    return <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme tog */}
        <ThemeToggle />
        {/* Background sec */}
        <StarBackground />
        {/* Nav */}
        <NavBar />
        {/* Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
        </main>

        {/* ending part */}

    </div>;

} ;