import React from 'react';
import LeadForm from './components/LeadForm';
import { Building } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#667db6] via-[#0082c8] to-[#667db6]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Building className="mx-auto h-12 w-12 text-white" />
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Propiedades en Rosario
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-100 sm:mt-4">
            Encuentre la propiedad perfecta para usted en Rosario, Argentina
          </p>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;