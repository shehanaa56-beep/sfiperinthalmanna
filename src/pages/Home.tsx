import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplet, Search, Users, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto grid items-center md:grid-cols-2 gap-8">
            <div className="flex justify-center md:justify-start">
              {/* Image on the left for md+ screens */}
              <img
                src="/images/SFI.png"
                alt="SFI - community supporting blood donations"
                loading="lazy"
                className="w-56 md:w-80 lg:w-96 rounded-xl shadow-lg object-contain"
              />
            </div>

            <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 shadow-glass">
                <Droplet className="w-5 h-5 text-primary fill-current" />
                <span className="text-sm font-medium">Saving Lives Together</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                SFI Blood Donors
                <span className="block text-primary">Directory</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect with generous blood donors across Kerala. Every donation counts,
                every donor matters. Join our community of life-savers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/donors">
                  <Button size="lg" className="shadow-glow hover:shadow-glow transition-all">
                    <Search className="w-5 h-5 mr-2" />
                    Find Donors
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="glass-effect">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect glass-hover rounded-2xl p-8 text-center shadow-glass">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Network</h3>
              <p className="text-muted-foreground">
                Access a comprehensive directory of verified blood donors across Kerala
              </p>
            </div>

            <div className="glass-effect glass-hover rounded-2xl p-8 text-center shadow-glass">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p className="text-muted-foreground">
                Filter by blood group and location to find the right donor quickly
              </p>
            </div>

            <div className="glass-effect glass-hover rounded-2xl p-8 text-center shadow-glass">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary fill-current" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
              <p className="text-muted-foreground">
                Connect directly with donors and make a life-saving difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-3xl p-8 md:p-12 text-center shadow-glass">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our directory of blood donors and connect with someone who can help save a life today.
            </p>
            <Link to="/donors">
              <Button size="lg" className="shadow-glow">
                <Droplet className="w-5 h-5 mr-2 fill-current" />
                View All Donors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
