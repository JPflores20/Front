import React, { useState } from 'react';
import { User, Mail, Lock, GraduationCap } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface RegistrationFormProps {
  onSubmit: (formData: {
    firstName: string;
    maternalLastName: string;
    paternalLastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    areaOfKnowledge: string;
  }) => void;
}

const AREAS_OF_KNOWLEDGE = [
  'Computer Science',
  'Engineering',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Medicine',
  'Social Sciences',
  'Humanities',
  'Arts',
  'Other'
];

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    maternalLastName: '',
    paternalLastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    areaOfKnowledge: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    maternalLastName: '',
    paternalLastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    areaOfKnowledge: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      maternalLastName: '',
      paternalLastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      areaOfKnowledge: ''
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.maternalLastName.trim()) {
      newErrors.maternalLastName = 'Maternal last name is required';
      isValid = false;
    }

    if (!formData.paternalLastName.trim()) {
      newErrors.paternalLastName = 'Paternal last name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!formData.areaOfKnowledge) {
      newErrors.areaOfKnowledge = 'Please select an area of knowledge';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      onSubmit(formData);
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="First Name"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="John"
          icon={<User className="h-5 w-5 text-gray-400" />}
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
        />
        
        <Input
          label="Maternal Last Name"
          type="text"
          id="maternalLastName"
          name="maternalLastName"
          placeholder="Doe"
          icon={<User className="h-5 w-5 text-gray-400" />}
          value={formData.maternalLastName}
          onChange={handleChange}
          error={errors.maternalLastName}
          required
        />
        
        <Input
          label="Paternal Last Name"
          type="text"
          id="paternalLastName"
          name="paternalLastName"
          placeholder="Smith"
          icon={<User className="h-5 w-5 text-gray-400" />}
          value={formData.paternalLastName}
          onChange={handleChange}
          error={errors.paternalLastName}
          required
        />
      </div>

      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="name@example.com"
        icon={<Mail className="h-5 w-5 text-gray-400" />}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />
      
      <Input
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="••••••••"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
      />
      
      <Input
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="••••••••"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        required
      />

      <div className="space-y-2">
        <label htmlFor="areaOfKnowledge" className="block text-sm font-medium text-white">
          Area of Knowledge
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <GraduationCap className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="areaOfKnowledge"
            name="areaOfKnowledge"
            value={formData.areaOfKnowledge}
            onChange={handleChange}
            className={`
              block w-full rounded-md bg-navy-800 border-transparent text-white
              placeholder:text-gray-400 focus:border-light-blue-500 focus:ring-light-blue-500
              pl-10 pr-4 py-3 transition-all appearance-none
              ${errors.areaOfKnowledge ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
            `}
            required
          >
            <option value="">Select an area</option>
            {AREAS_OF_KNOWLEDGE.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>
        {errors.areaOfKnowledge && (
          <p className="text-red-500 text-sm">{errors.areaOfKnowledge}</p>
        )}
      </div>
      
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isLoading}
        fullWidth
        className="mt-8 bg-light-blue-600 hover:bg-light-blue-700"
      >
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;