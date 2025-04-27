
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ArenaDetailComponent from '@/components/ArenaDetail';
import LoadingAnimation from '@/components/LoadingAnimation';
import { Arena } from '@/components/ArenaCard';

// Reusing the same dummy data. In a real app, this would come from an API
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

const ArenaDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [arena, setArena] = useState<Arena | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with loading
    setIsLoading(true);
    
    setTimeout(() => {
      if (id) {
        const foundArena = dummyArenas.find(a => a.id === parseInt(id));
        setArena(foundArena || null);
      }
      setIsLoading(false);
    }, 1000);
  }, [id]);

  if (isLoading) {
    return <LoadingAnimation isLoading={true} />;
  }

  if (!arena) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Arena Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The arena you're looking for doesn't exist or has been removed.
          </p>
          <a href="/" className="btn-sports">
            Back to Home
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ArenaDetailComponent arena={arena} />
    </>
  );
};

export default ArenaDetailPage;
