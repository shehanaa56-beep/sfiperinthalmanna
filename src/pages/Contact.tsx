import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-glass">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Contact Information</h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Email</h3>
                    <a
                      href="mailto:contact@sfikerala.org"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                    >
                     sfipmnaac@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base"
                    >
                     +91 75939 16112
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">Location</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      SFI Perinthalmanna Office<br />
                      Perinthalmanna, Kerala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-glass">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Connect With Us</h2>

              <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                Follow us on social media to stay updated with our blood donation drives and community initiatives.
              </p>

              <div className="space-y-3 md:space-y-4">
                <a
                  href="https://www.facebook.com/share/1Bs3k9DN9p/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl glass-effect glass-hover"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Facebook className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Facebook</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">sfi_perinthalmanna</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/sfi_perinthalmanna?igsh=MWYyNzA1NWd3Nm9iMA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl glass-effect glass-hover"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Instagram</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">@sfi_perinthalmanna</p>
                  </div>
                </a>

                <a
                  href="https://twitter.com/SFI_Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl glass-effect glass-hover"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Twitter className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Twitter</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">sfi_perinthalmanna</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-6 md:mt-8 glass-effect rounded-2xl p-4 md:p-6 shadow-glass border-l-4 border-primary">
            <h3 className="font-semibold text-base md:text-lg mb-2">Emergency Blood Request?</h3>
            <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
              For urgent blood requirements, please contact our 24/7 helpline
            </p>
            <Button className="shadow-glow text-sm md:text-base w-full sm:w-auto">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Call Emergency Helpline- </span>
              +91 75939 16112
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
