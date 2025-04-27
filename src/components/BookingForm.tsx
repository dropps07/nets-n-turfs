
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Arena } from './ArenaCard';

interface BookingFormProps {
  arena: Arena;
}

const BookingForm: React.FC<BookingFormProps> = ({ arena }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(1);
  const navigate = useNavigate();
  
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit booking data to an API
    navigate('/confirmation');
  };

  // Calculate the total price based on duration
  const calculateTotal = () => {
    const priceValue = parseInt(arena.price.replace(/\D/g, ''));
    return `$${priceValue * duration}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Book a Slot at {arena.name}</h1>
        
        <form onSubmit={handleSubmit} className="card-sports">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Calendar className="mr-2 text-sports-green" size={20} />
              Select Date
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[...Array(7)].map((_, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i);
                const formattedDate = date.toISOString().split('T')[0];
                const displayDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                
                return (
                  <button
                    key={i}
                    type="button"
                    className={`p-3 rounded-md border text-center transition-colors ${
                      selectedDate === formattedDate
                        ? 'bg-sports-green text-white border-sports-green'
                        : 'border-border hover:border-sports-green'
                    }`}
                    onClick={() => setSelectedDate(formattedDate)}
                  >
                    {displayDate}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Clock className="mr-2 text-sports-green" size={20} />
              Select Time Slot
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`p-3 rounded-md border text-center transition-colors ${
                    selectedTime === time
                      ? 'bg-sports-green text-white border-sports-green'
                      : 'border-border hover:border-sports-green'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Duration</h3>
            <div className="flex items-center">
              <button 
                type="button"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-sports-green transition-colors"
                onClick={() => setDuration(Math.max(1, duration - 1))}
              >
                -
              </button>
              <div className="mx-4 text-xl font-medium">{duration} {duration === 1 ? 'hour' : 'hours'}</div>
              <button 
                type="button"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-sports-green transition-colors"
                onClick={() => setDuration(Math.min(3, duration + 1))}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 mt-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg">Total Price</div>
              <div className="text-xl font-bold text-sports-green">
                {calculateTotal()}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={`/arena/${arena.id}`} className="flex-1">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                >
                  Go Back
                </Button>
              </Link>
              <Button 
                type="submit" 
                className="flex-1 bg-sports-green hover:bg-sports-green-dark text-white"
                disabled={!selectedDate || !selectedTime}
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
