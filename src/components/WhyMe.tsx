import { Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { toast } from 'sonner';
import { useState } from "react";


export const WhyMe = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault() 

        setIsSubmitting(true);

        setTimeout(() => {
            toast(
                <div className="w-full text-center">
                  <h1 className="font-semibold text-lg">Message Sent</h1>
                  <p className="text-sm text-muted-foreground">Thank you for your message!</p>
                </div>
              );
        }, 1500)

        setIsSubmitting(false);
    }

    return <section id="whyMe" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Why <span className="text-primary"> Me</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I pair relentless work ethic and a rapid learning speed with user-first design, giving Elas a teammate who can adapt instantly and ship polished solutions that people actually want to use.
            </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                   {/* <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3> */}

                    <div className="space-y-3 max-w-xs">
                        <div className="items-center text-center">
                            <div className="ml-2 md:ml-3">
                                <h4 className="font-medium"><span className="text-primary/70">Bridge Complex Tech & Human Usability</span><br /> I translate intricate systems into clear, intuitive interfaces, ensuring Elas’s tools feel effortless for every user.</h4>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 items-center text-center">
                            <div className="ml-2 md:ml-3">
                                <h4 className="font-medium"><span className="text-primary/70">Rapid Assimilation of New Stacks</span><br /> From CAD to React to chemical lab work, I consistently master unfamiliar technologies in weeks, not months—ideal for your fast-moving, cross-disciplinary projects.</h4>
                            </div>
                        </div>
                        
                
                    {/* can put social other stuff */}
                </div>
                <div>
                <div className="items-center text-center">
                            <div className="ml-2 md:ml-3">
                                <h4 className="font-medium"><span className="text-primary/70">Design-Driven Engineering Mindset</span><br /> My dual skill set in customer-centric design and development abilities delivers striking products that remain clean, maintainable, and scalable.</h4>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 items-center text-center">
                            <div className="ml-2 md:ml-3">
                                <h4 className="font-medium"><span className="text-primary/70">Proven Execution & Leadership</span><br /> As an initial member of a startup along with being a student leader, I’ve communitcated and rallied teams, in athletic and academic fields alike, toward tight deadlines and bright lights; I bring that bias for action to Elas.</h4>
                            </div>
                        </div>
                </div>
                {/*<div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Probably will go away"/> 
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Probably will go away@gmail.com"/> 
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                id="message" 
                                name="message" 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Probably will go away but send it"/> 
                            </div>

                            <button disabled = {isSubmitting} type="submit" className={cn("buttons w-full flex items-center justify-center gap-2",

                            )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>

                            </button>
                        </form>
                    </div> */}
            </div>
        </div>
    </section>
}