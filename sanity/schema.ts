import { type SchemaTypeDefinition } from 'sanity'
import Products from './Products'
import PatientData from './patientdata'


import Doctor from './Doctor'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, PatientData, Doctor],

}
