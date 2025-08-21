import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-card to-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold gradient-text mb-4">Vedvix</div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovation, creativity, and cutting-edge
              technology.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
                <Button key={social} variant="outline" size="sm" className="magnetic-hover bg-transparent">
                  {social}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 gradient-text">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 gradient-text">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@vedvix.com</li>
              <li>+91 9460688385</li>
              <li>Jaipur, Rajasthan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Vedvix. All rights reserved. Crafted with ❤️ and innovation.</p>
        </div>
      </div>
    </footer>
  )
}
