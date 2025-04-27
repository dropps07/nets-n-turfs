import React from 'react';

interface LoadingAnimationProps {
  isLoading: boolean;
  logoSrc?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isLoading, logoSrc = "/loading-logo.png" }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{
      background: 'radial-gradient(circle, rgba(0,0,0,0.95) 0%, rgba(0,0,0,1) 100%)'
    }}>
      <div className="flex flex-col items-center">
        {/* Logo container with blinking animation */}
        <div className="w-64 h-64 animate-slow-blink">
          {/* Logo image */}
          <img 
            src={logoSrc} 
            alt="Loading Logo" 
            className="w-64 h-64 object-contain"
          />
        </div>
        
        <div className="mt-6 text-white font-bold text-xl
        ">
          
        </div>
      </div>

      {/* Add custom animation for slow blinking */}
      <style>
        {`
          @keyframes slow-blink {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
          
          .animate-slow-blink {
            animation: slow-blink 1s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingAnimation;