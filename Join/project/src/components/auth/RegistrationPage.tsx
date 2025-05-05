import React from 'react';
import { Sparkles } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const RegistrationPage: React.FC = () => {
  const handleRegistration = (formData: {
    firstName: string;
    maternalLastName: string;
    paternalLastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    areaOfKnowledge: string;
  }) => {
    console.log('Registration data:', formData);
    // In a real app, you would handle registration here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-900 p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="bg-navy-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-8 animate-fadeIn">
          {/* Logo and welcome message */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-light-blue-500/20 text-light-blue-500 mb-2">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Join <span className="text-light-blue-500">CORA</span>
            </h1>
            <p className="text-gray-400">Create your account to get started</p>
          </div>
          
          {/* Registration form */}
          <RegistrationForm onSubmit={handleRegistration} />
          
          {/* Sign in link */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <a href="#" className="font-medium text-light-blue-500 hover:text-light-blue-400 transition-colors">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;