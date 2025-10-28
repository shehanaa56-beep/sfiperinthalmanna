import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplet, Search, Users, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6x1 mx-auto grid items-center md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex justify-center md:justify-start order-1 md:order-2">
              {/* Image on the left for md+ screens */}
              <img
                src="/images/SFI.png"
                alt="SFI - community supporting blood donations"
                loading="lazy"
                className="w-64 sm:w-80 md:w-[32rem] lg:w-[36rem] xl:w-[40rem] rounded-xl shadow-lg object-contain"
              />
            </div>

            <div className="text-center md:text-left max-w-xl mx-auto md:mx-0 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-effect mb-4 sm:mb-6 shadow-glass">
                <Droplet className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-current" />
                <span className="text-xs sm:text-sm font-medium">Saving Lives Together</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-display font-bold">
                <span className="font-bold">എസ്‌.എഫ്‌.ഐ രക്തദാതാക്കളുടെ</span>
                <span className="block text-primary font-script font-bold">ഡയറക്ടറി</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                കേരളത്തിലെ മനസുള്ള രക്തദാതാക്കളുമായി ബന്ധപ്പെടൂ. ഓരോ ദാനവും വിലപ്പെട്ടതാണ്,
ഓരോ ദാതാവും അതിലേറെ പ്രധാനമാണ്. ജീവൻ രക്ഷകരുടെ നമ്മുടെ സമൂഹത്തിൽ ചേരൂ.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link to="/donors">
                  <Button size="lg" className="shadow-glow hover:shadow-glow transition-all text-sm sm:text-base">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
ദാതാക്കളെ കണ്ടെത്തുക

                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="glass-effect text-sm sm:text-base">
  ബന്ധപ്പെടൂ
</Button>

                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass-effect glass-hover rounded-2xl p-6 sm:p-8 text-center shadow-glass">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">വിപുലമായ ശൃംഖല</h3>
<p className="text-xs sm:text-sm md:text-base text-muted-foreground">
  കേരളമൊട്ടാകെ പരിശോധന ചെയ്ത രക്തദാതാക്കളുടെ സമഗ്രമായ ഡയറക്ടറിയിലേക്ക് പ്രവേശിക്കുക
</p>
</div>


            <div className="glass-effect glass-hover rounded-2xl p-6 sm:p-8 text-center shadow-glass">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">ലളിതമായ തിരച്ചിൽ</h3>
<p className="text-xs sm:text-sm md:text-base text-muted-foreground">
  ആവശ്യമായ ദാതാവിനെ വേഗത്തിൽ കണ്ടെത്താൻ രക്തഗ്രൂപ്പും സ്ഥലവും അടിസ്ഥാനമാക്കി ഫിൽട്ടർ ചെയ്യൂ
</p>

            </div>

            <div className="glass-effect glass-hover rounded-2xl p-6 sm:p-8 text-center shadow-glass sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-current" />
              </div>
             <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">ജീവൻ രക്ഷിക്കുക</h3>
<p className="text-xs sm:text-sm md:text-base text-muted-foreground">
  ദാതാക്കളുമായി നേരിട്ട് ബന്ധപ്പെടുകയും ഒരു ജീവൻ രക്ഷിക്കുന്ന മാറ്റം സൃഷ്ടിക്കുകയും ചെയ്യൂ
</p>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-glass">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
  മാറ്റം സൃഷ്ടിക്കാൻ തയ്യാറാണോ?
</h2>
<p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
  നമ്മുടെ രക്തദാതാക്കളുടെ ഡയറക്ടറി ബ്രൗസ് ചെയ്ത് ഇന്ന് തന്നെ ഒരു ജീവൻ രക്ഷിക്കാൻ സഹായിക്കാവുന്ന വ്യക്തിയുമായി ബന്ധപ്പെടൂ.
</p>
<Link to="/donors">
  <Button className="shadow-glow px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg">
    <Droplet className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 fill-current" />
    എല്ലാ ദാതാക്കളെയും <br></br>കാണുക
  </Button>

            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
