import React from 'react';
import Button from '../ui/Button';

interface SocialLoginProps {
  onGoogleLogin: () => void;
  onAppleLogin: () => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ onGoogleLogin, onAppleLogin }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="flex-grow h-px bg-gray-600"></div>
        <span className="px-3 text-sm text-gray-400">or continue with</span>
        <div className="flex-grow h-px bg-gray-600"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="social"
          onClick={onGoogleLogin}
          className="transition-transform hover:scale-105"
          fullWidth
        >
          <svg 
            className="w-5 h-5 mr-2" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
              fill="#4285F4" 
            />
            <path 
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
              fill="#34A853" 
            />
            <path 
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" 
              fill="#FBBC05" 
            />
            <path 
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
              fill="#EA4335" 
            />
          </svg>
          Google
        </Button>
        
        <Button 
          variant="social"
          onClick={onAppleLogin}
          className="transition-transform hover:scale-105"
          fullWidth
        >
          <svg 
            className="w-5 h-5 mr-2" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M16.19 2c.1 1.22-.33 2.4-1.04 3.27-.72.88-1.9 1.57-3.05 1.48-.14-1.17.33-2.37 1.03-3.14.78-.87 2.05-1.52 3.06-1.61zM22 17.25c0 .25-.01.5-.03.75-.25 1.08-.7 2.06-1.32 2.95-.52.75-1.13 1.55-2.19 1.55-1.02 0-1.68-.61-2.69-.61-1.05 0-1.76.61-2.7.61-1.1.01-1.93-1.01-2.5-1.81-1.73-2.43-3.05-6.92-1.28-9.93.88-1.5 2.46-2.45 4.16-2.48 1.03 0 2.02.69 2.65.69.61 0 1.76-.72 2.98-.62.51.02 1.94.21 2.87 1.56-2.38 1.54-2 5.5.98 6.32l.01.03c-.37 1.13-.88 2.22-1.87 2.99h-.07z" 
              fill="currentColor"
            />
          </svg>
          Apple
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;