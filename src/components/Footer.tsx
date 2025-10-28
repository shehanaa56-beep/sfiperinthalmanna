import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border/50">
      <div className="bg-gradient-primary py-1"></div>
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="text-center">
          <p className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025 SFI</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Designed with <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary fill-current" /> in Perinthalmanna
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
