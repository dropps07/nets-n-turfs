
import React from 'react';
import { Link } from 'react-router-dom';
import { Circle, Star, MapPin } from 'lucide-react';
 
export interface Arena {
  id: number;
  name: string;
  location: string;
  distance: string;
  price: string;
  rating: number;
  sport: 'football' | 'tennis';
  image: string;
}

interface ArenaCardProps {
  arena: Arena;
}

const ArenaCard: React.FC<ArenaCardProps> = ({ arena }) => {
  const SportIcon = arena.sport === 'football' ? Circle : Star;
  
  return (
    <Link to={`/arena/${arena.id}`} className="block">
      <div className="card-sports overflow-hidden">
        <div className="relative h-48 mb-4 overflow-hidden rounded-md">
          <img 
            src={arena.image} 
            alt={arena.name} 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center">
            <SportIcon size={14} className="mr-1 text-sports-green" />
            <span>{arena.sport}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-lg mb-1">{arena.name}</h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{arena.location} • {arena.distance}</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
            <span className="font-medium">{arena.rating.toFixed(1)}</span>
          </div>
          <div className="text-sports-green font-bold">
            {arena.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArenaCard;
