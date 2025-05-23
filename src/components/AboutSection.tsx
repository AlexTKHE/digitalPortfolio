import { Code } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="spacee-y-6">
                    <h3 className="text-muted-foreground text-2xl font-semibold">
                    Designer with an inuitive and analyitical mindset&nbsp;| Studying Chemical Engineering @ UCSB 
                    
                    </h3>

                    <p className="text-muted-foreground">
                        I thrive in fast paced enviornemnts where limits are pushed, turning ambitious ideas into clear, user-focused products—fast.
                    </p>
                    {/* buttons for the thing */}

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#projects" className="buttons">
                            Projects
                        </a>

                       {/* <a className={cn("px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 ",
                            "transition-colors duration-300"
                        )}>
                            Touch Touchy
                        </a>  */}
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Design-Driven Development</h4>
                                <p className="text-muted-foreground">
                                    {" "}
                                    Specialty in turning user insights into streamlined design workflows—clean visuals, maintainable code.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/> </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Analytical Problem Solving</h4>
                                <p className="text-muted-foreground">
                                    {" "}
                                    Engineering mindset for breaking down tough challenges—from UI states to
                                    lab experiments.
                                    </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            {/* use diff stuff from imports here*/}
                            <Code className="h-6 w-6 text-primary"/> </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Rapid Learning</h4>
                                <p className="text-muted-foreground">
                                    {" "}
                                    Rapid learner, proven track record in mastering new tech stacks and skills quickly; able to ramp up and adapt fast in any domain.
                                    </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}