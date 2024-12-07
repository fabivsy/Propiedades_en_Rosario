export const PRICE_RANGES = {
  RANGE_1: {
    id: 'range-1',
    label: 'USD 40.000 - 150.000',
    value: '40k-150k'
  },
  RANGE_2: {
    id: 'range-2',
    label: 'USD 150.000 - 500.000',
    value: '150k-500k'
  },
  RANGE_3: {
    id: 'range-3',
    label: 'USD 500.000 - 1.000.000',
    value: '500k-1m'
  }
} as const;

export const PROPERTY_TYPES = {
  TERRENO: {
    id: 'terreno',
    label: 'Terreno',
    value: 'terreno'
  },
  DEPARTAMENTO: {
    id: 'departamento',
    label: 'Departamento',
    value: 'departamento'
  },
  CASA: {
    id: 'casa',
    label: 'Casa',
    value: 'casa'
  }
} as const;