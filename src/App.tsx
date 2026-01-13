import { Card, CardContent } from "./components/ui/card";
import { Logo } from "./components/ui/logo";
import { Code2, Lightbulb, Rocket, Mail, MapPin, ExternalLink, FileText } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import redHawkLogo from "./assets/redhawk.png";
import fzLogo from "./assets/fz.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo width={24} />
            <span className="text-2xl font-bold text-gray-900">viable</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom Software Development
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We build scalable, innovative software solutions tailored to your business needs. From concept to deployment, we turn your vision into reality.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjgzMDY5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software Development Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive software development services to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Code2 className="size-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bespoke software solutions built from the ground up to match your unique business requirements and workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="size-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform your ideas into cutting-edge digital products with modern technologies and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="size-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale & Deploy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Launch your product with confidence using robust, scalable infrastructure and continuous support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our latest work and see how we've helped businesses succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
              <CardContent className="pt-8 pb-8">
                <div className="w-56 h-56 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                  <img src={fzLogo} alt="Faktura Zdarma Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Faktúra Zdarma</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A modern invoicing application that simplifies billing and payment tracking for freelancers and small businesses.
                </p>
                <a 
                  href="https://fakturazdarma.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all"
                >
                  Visit Project <ExternalLink className="size-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
              <CardContent className="pt-8 pb-8">
                <div className="w-56 h-56 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                  <img src={redHawkLogo} alt="Red Hawk Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Red Hawk</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A comprehensive vehicle tracking portal providing real-time fleet management and monitoring capabilities.
                </p>
                <div className="text-gray-500 font-semibold">
                  Enterprise Solution
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611648694931-1aeda329f9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODMwODgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Technology Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Building The Future, One Line At A Time</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Viable, we're passionate about creating software that makes a difference. Our team of experienced developers, designers, and strategists work collaboratively to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a startup looking to launch your MVP or an enterprise seeking to modernize your systems, we have the expertise and dedication to bring your project to life.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Build Something Great</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to start your project? Get in touch with us today and let's discuss how we can help.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Mail className="size-6 text-blue-600" />
                </div>
                <p className="text-gray-900 font-semibold mb-1">Email</p>
                <p className="text-gray-600">info@viable.sk</p>
              </div>
              <div className="flex flex-col items-center">
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="size-6 text-blue-600" />
                </div>
                <p className="text-gray-900 font-semibold mb-1">Contact</p>
                <p className="text-gray-600">viable, s.r.o.<br/>Suchoňova 5724/18<br/>058 01 Poprad, Slovakia</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Logo width={24} />
            <span className="text-xl font-bold text-white">viable, s.r.o.</span>
          </div>
          <p className="mb-4">Custom Software Development Solutions</p>
          <p className="text-sm">© 2026 Viable. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}