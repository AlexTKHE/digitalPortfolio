import { ArrowUp } from "lucide-react"


export const FooterSection = () => {
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between"> {" "}
    <p className="text-sm text-muted-foreground"> Thank you for Visiting! <br /> <span className="text-primary hover:text-primary-foreground">alexkerrthompson@gmail.com</span></p> 
    <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp size={20}/>
    </a>
    </footer>
}