
import React from 'react';
import { Circle, Star } from 'lucide-react';

interface SportSelectionProps {
  onSelectSport: (sport: 'football' | 'Badminton') => void;
}

const SportSelection: React.FC<SportSelectionProps> = ({ onSelectSport }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div 
        className="card-sports cursor-pointer flex flex-col items-center py-12"
        onClick={() => onSelectSport('football')}
      >
        <Circle size={64} className="text-sports-green mb-4" />
        <h3 className="text-xl font-bold">Football</h3>
        <p className="text-muted-foreground mt-2 text-center">
          Book football pitches nearby
        </p>
      </div>
      
      <div 
        className="card-sports cursor-pointer flex flex-col items-center py-12"
        onClick={() => onSelectSport('Badminton')}
      >
        <Star size={64} className="text-sports-green mb-4" />
        <h3 className="text-xl font-bold">Badminton</h3>
        <p className="text-muted-foreground mt-2 text-center">
          Reserve Badminton courts in your area
        </p>
      </div>
    </div>
  );
};

export default SportSelection;
