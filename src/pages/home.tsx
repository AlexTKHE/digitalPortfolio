import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {

    return <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme tog */}
        <ThemeToggle />
        {/* Background sec */}
        <StarBackground />
        {/* Nav */}
        <NavBar />
        {/* Content */}


        {/* ending part */}

    </div>;

} ;