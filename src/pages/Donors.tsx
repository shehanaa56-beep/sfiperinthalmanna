import { useState, useMemo, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DonorCard from "@/components/DonorCard";
import { getAllDonors, getDonorsByBloodGroup, searchDonors, Donor } from "@/lib/firebaseServices";
import { Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const loadDonors = useCallback(async () => {
    try {
      setLoading(true);
      const donorsData = await getAllDonors();
      setDonors(donorsData);
    } catch (error) {
      toast({
        title: 'Error loading donors',
        description: 'Failed to load donor data. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadDonors();
  }, [loadDonors]);

  const filteredDonors = useMemo(() => {
    if (!donors.length) return [];

    let filtered = donors;

    // Filter by blood group first
    if (selectedBloodGroup !== "All") {
      filtered = donors.filter(donor => donor.bloodGroup === selectedBloodGroup);
    }

    // Then filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(donor =>
        donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        donor.phone.includes(searchQuery)
      );
    }

    return filtered;
  }, [searchQuery, selectedBloodGroup, donors]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
  രക്തദാതാക്കളുടെ ഡയറക്ടറി
</h1>
<p className="text-base sm:text-lg text-muted-foreground">
  കേരളമൊട്ടാകെ രക്തദാതാക്കളെ തിരഞ്ഞ് ബന്ധപ്പെടൂ
</p>

          </div>

          {/* Search and Filter */}
          <div className="glass-effect rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-glass">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:pl-10 bg-background/50 text-sm sm:text-base"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground z-10" />
                <Select value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
                  <SelectTrigger className="pl-9 sm:pl-10 bg-background/50 text-sm sm:text-base">
                    <SelectValue placeholder="Filter by blood group" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover backdrop-blur-xl z-50">
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group === "All" ? "All Blood Groups" : group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Found <span className="font-semibold text-primary">{filteredDonors.length}</span> donor{filteredDonors.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Donor Cards Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-8 sm:py-12">
              <div className="animate-spin rounded-full h-24 w-24 sm:h-32 sm:w-32 border-b-2 border-red-600"></div>
            </div>
          ) : filteredDonors.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {filteredDonors.map((donor) => (
                <DonorCard
                  key={donor.id}
                  name={donor.name}
                  phone={donor.phone}
                  bloodGroup={donor.bloodGroup}
                />
              ))}
            </div>
          ) : (
            <div className="glass-effect rounded-2xl p-8 sm:p-12 text-center shadow-glass">
              <p className="text-base sm:text-lg text-muted-foreground">
                {donors.length === 0
                  ? "No donors available in the database."
                  : "No donors found matching your criteria. Try adjusting your search."
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donors;
