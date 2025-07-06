import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (<section id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-20">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hello! I am </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Alex </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Thompson</span>
                    <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">...</span>
                </h1>

                <p className="text-md md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                and I'm a front-end developer, designer, and engineering student with a deep interest in emerging technologies and systems that drive real-world impact. With a strong foundation in visual design and front-end tools such as Figma, React, and Typescript, I specialize in building clean, intuitive interfaces that make complex systems feel simple. 
                As a Chemical Engineering major at UCSB and an initial member of a software startup, I've worked on projects ranging from education tools to brand identity design. My experience in 3D modeling, lab experiments, and user-facing platforms gives me a unique lens on how physical systems and digital interfaces intersect. What draws me to Elas is its bold application of blockchain and AI in practical industries. 
                I'm excited by the idea of creating user-first tools that make advanced technologies accessible, secure, and elegant. With a high work ethic, a fast learning curve, and a passion for precision, I am eager for the opportunity to contribute to Elas’s mission to revolutionize how organizations build trust and operate at scale.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="buttons">
                        View my Projects
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>);
}