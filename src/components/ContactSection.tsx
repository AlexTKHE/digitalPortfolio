import { Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { toast } from 'sonner';
import { useState } from "react";


export const ContactSection = () => {
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

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="conatainer mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I like opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a target="_blank" href="alexkerrthompson@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    alexkerrthompson@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a target="_blank" href="tel:xxx-xxx-xxx" className="text-muted-foreground hover:text-primary transition-colors">
                                    +x-xxx-xxx-xxx
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Pleasanton, California
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* can put social other stuff */}
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
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
                    </div>
            </div>
        </div>
    </section>
}