
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Circle,
  Star, 
  MapPin, 
  Clock, 
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Arena } from './ArenaCard';

interface ArenaDetailProps {
  arena: Arena;
}

const ArenaDetail: React.FC<ArenaDetailProps> = ({ arena }) => {
  const SportIcon = arena.sport === 'football' ? Circle : Star;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src={arena.image} 
              alt={arena.name} 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">{arena.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <SportIcon size={18} className="text-sports-green mr-2" />
              <span className="capitalize">{arena.sport}</span>
            </div>
            <div className="flex items-center mr-4">
              <MapPin size={18} className="text-muted-foreground mr-2" />
              <span className="text-muted-foreground">{arena.location}</span>
            </div>
            <div className="flex items-center">
              <Star size={18} className="text-yellow-500 mr-2" fill="currentColor" />
              <span>{arena.rating.toFixed(1)} / 5.0</span>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 mt-6">
            <h2 className="text-xl font-bold mb-4">About this venue</h2>
            <p className="text-muted-foreground">
              This premium {arena.sport} facility offers state-of-the-art 
              amenities for both casual players and serious athletes. Enjoy
              well-maintained playing surfaces, convenient changing rooms, 
              and on-site refreshments.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="card-sports flex flex-col items-center py-4">
                <Clock size={24} className="text-sports-green mb-2" />
                <span className="text-sm text-center">Open 7AM - 10PM</span>
              </div>
              <div className="card-sports flex flex-col items-center py-4">
                <Calendar size={24} className="text-sports-green mb-2" />
                <span className="text-sm text-center">Available all week</span>
              </div>
              <div className="card-sports flex flex-col items-center py-4">
                <SportIcon size={24} className="text-sports-green mb-2" />
                <span className="text-sm text-center">{arena.sport === 'football' ? '5-a-side Pitch' : 'Hard Court'}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="card-sports sticky top-4">
            <h3 className="text-xl font-bold mb-4">Book a Slot</h3>
            <p className="text-muted-foreground mb-4">
              Select a date and time to book this {arena.sport} arena
            </p>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price</h4>
              <div className="text-sports-green text-2xl font-bold">{arena.price}</div>
              <div className="text-sm text-muted-foreground">per hour</div>
            </div>
            
            <Link to={`/booking/${arena.id}`}>
              <Button className="w-full bg-sports-green hover:bg-sports-green-dark text-white">
                Check Availability
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArenaDetail;
