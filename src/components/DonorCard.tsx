import { User, Phone, Droplet } from "lucide-react";

interface DonorCardProps {
  name: string;
  phone: string;
  bloodGroup: string;
}

const DonorCard = ({ name, phone, bloodGroup }: DonorCardProps) => {
  return (
    <div className="glass-effect glass-hover rounded-2xl p-4 md:p-6 shadow-glass">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
        <div className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-semibold shadow-glow">
          <Droplet className="w-3 h-3 md:w-4 md:h-4 fill-current" />
          {bloodGroup}
        </div>
      </div>

      <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-foreground">{name}</h3>

      <div className="flex items-center gap-2 text-muted-foreground">
        <Phone className="w-4 h-4" />
        <a
          href={`tel:${phone}`}
          className="hover:text-primary transition-colors text-sm md:text-base"
        >
          {phone}
        </a>
      </div>
    </div>
  );
};

export default DonorCard;
