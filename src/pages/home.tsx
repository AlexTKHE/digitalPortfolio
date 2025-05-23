import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";

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
        </main>

        {/* ending part */}

    </div>;

} ;