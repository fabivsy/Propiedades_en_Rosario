import { PRICE_RANGES, PROPERTY_TYPES } from '../constants/propertyData';

export type PropertyType = typeof PROPERTY_TYPES[keyof typeof PROPERTY_TYPES]['value'];
export type PriceRange = typeof PRICE_RANGES[keyof typeof PRICE_RANGES]['value'];

export interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: PropertyType;
  priceRange: PriceRange;
}