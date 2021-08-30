export interface DriverModel {
  id?: number;
  vehicle_id?: number;
  description?: string;
  email?: string;
  entryDate?: Date;
  lastname?: string;
  names?: string;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}
// para las FK se crea el campo en singular y como parametro el modelo se lo importa
