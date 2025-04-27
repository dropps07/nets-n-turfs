
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Confirmation: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto card-sports p-8 text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="text-sports-green w-20 h-20" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
          
          <p className="text-muted-foreground mb-8">
            Your slot has been successfully booked. A confirmation email 
            has been sent with all the details of your booking.
          </p>
          
          <div className="border border-border rounded-md p-4 mb-8">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-muted-foreground">Booking ID</p>
                <p className="font-medium">SPT-{Math.floor(Math.random() * 900000) + 100000}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium">14:00 - 15:00</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium text-sports-green">Confirmed</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <Link to="/" className="w-full">
              <Button className="w-full bg-sports-green hover:bg-sports-green-dark text-white">
                Return to Home
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              View My Bookings
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
