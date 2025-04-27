
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SportSelection from '@/components/SportSelection';
import ArenaCard, { Arena } from '@/components/ArenaCard';
import LoadingAnimation from '@/components/LoadingAnimation';

const dummyArenas: Arena[] = [
  {
    id: 1,
    name: "GreenField Arena",
    location: "Downtown",
    distance: "1.2 km",
    price: "$40",
    rating: 4.7,
    sport: "football",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 2,
    name: "Central Court",
    location: "Midtown",
    distance: "2.5 km",
    price: "$35",
    rating: 4.5,
    sport: "tennis",
    image: "https://images.unsplash.com/photo-1595435742656-5d8db5d6f20d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 3,
    name: "Victory Park Fields",
    location: "Westside",
    distance: "3.8 km",
    price: "$50",
    rating: 4.9,
    sport: "football",
    image: "https://images.unsplash.com/photo-1576233525006-c5cc475e7bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    name: "Grand Slam Courts",
    location: "Eastside",
    distance: "4.1 km",
    price: "$45",
    rating: 4.6,
    sport: "tennis",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4e036eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    name: "Urban Kicks Stadium",
    location: "Downtown",
    distance: "1.5 km",
    price: "$55",
    rating: 4.8,
    sport: "football",
    image: "https://images.unsplash.com/photo-1455384979799-def2fce2c818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    name: "Ace Tennis Club",
    location: "Northside",
    distance: "2.9 km",
    price: "$38",
    rating: 4.4,
    sport: "tennis",
    image: "https://images.unsplash.com/photo-1567226055069-4c4c0ac95957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
  },
];

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState<'football' | 'tennis' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredArenas = selectedSport
    ? dummyArenas.filter(arena => arena.sport === selectedSport)
    : dummyArenas;

  const searchedArenas = searchQuery
    ? filteredArenas.filter(arena => 
        arena.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        arena.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredArenas;

  return (
    <>
      <LoadingAnimation isLoading={isLoading} />
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Book Your Sports Arena in Seconds
          </h1>
          <p className="text-xl text-muted-foreground">
            Find and book nearby football and tennis venues for your next game
          </p>
        </div>
        
        {!selectedSport ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Choose a Sport</h2>
            <SportSelection onSelectSport={setSelectedSport} />
          </>
        ) : (
          <>
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold capitalize">
                  {selectedSport} Venues Nearby
                </h2>
                <button 
                  onClick={() => setSelectedSport(null)}
                  className="text-sports-green hover:underline"
                >
                  Change Sport
                </button>
              </div>
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search venues..."
                  className="w-full md:w-[300px] bg-card border border-border rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-sports-green/30 focus:border-sports-green/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedArenas.map(arena => (
                <ArenaCard key={arena.id} arena={arena} />
              ))}
            </div>
            
            {searchedArenas.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold mb-2">No venues found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or changing your sport.
                </p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="btn-sports"
                >
                  Clear Search
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Index;
