import React, { useState } from 'react';
import { Mail, User, Home, DollarSign, Phone } from 'lucide-react';
import { Lead } from '../types/lead';
import { validatePhone, formatPhone } from '../utils/validation';
import { PRICE_RANGES, PROPERTY_TYPES } from '../constants/propertyData';
import { FormField } from './FormField';

export default function LeadForm() {
  const [phoneError, setPhoneError] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    if (value && !validatePhone(value)) {
      setPhoneError('Por favor, ingrese un número de teléfono válido (mínimo 8 dígitos)');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    if (!validatePhone(phone)) {
      setPhoneError('Número de teléfono inválido');
      return;
    }

    const lead: Lead = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formatPhone(phone),
      propertyType: formData.get('propertyType') as Lead['propertyType'],
      priceRange: formData.get('priceRange') as Lead['priceRange'],
    };
    console.log('Lead submitted:', lead);
    // Here you would typically send the data to your backend
  };

  const inputClassName = "pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm";
  const selectClassName = "pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <FormField label="Nombre" id="firstName" icon={User}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          className={inputClassName}
          placeholder="Juan"
        />
      </FormField>

      <FormField label="Apellido" id="lastName" icon={User}>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          className={inputClassName}
          placeholder="Pérez"
        />
      </FormField>

      <FormField label="Email" id="email" icon={Mail}>
        <input
          type="email"
          name="email"
          id="email"
          required
          className={inputClassName}
          placeholder="juan.perez@ejemplo.com"
        />
      </FormField>

      <FormField label="Teléfono" id="phone" icon={Phone} error={phoneError}>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
          className={`${inputClassName} ${
            phoneError ? 'border-red-300 focus:border-red-500' : ''
          }`}
          placeholder="+54 341 XXX-XXXX"
        />
      </FormField>

      <FormField label="Tipo de Propiedad" id="propertyType" icon={Home}>
        <select
          name="propertyType"
          id="propertyType"
          required
          className={selectClassName}
        >
          <option value="">Seleccionar tipo</option>
          {Object.values(PROPERTY_TYPES).map(type => (
            <option key={type.id} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Rango de Precio" id="priceRange" icon={DollarSign}>
        <select
          name="priceRange"
          id="priceRange"
          required
          className={selectClassName}
        >
          <option value="">Seleccionar rango</option>
          {Object.values(PRICE_RANGES).map(range => (
            <option key={range.id} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </FormField>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Enviar
      </button>
    </form>
  );
}