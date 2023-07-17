import { DoctorInterface } from 'interfaces/doctor';
import { PatientInterface } from 'interfaces/patient';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  doctor_id?: string;
  patient_id?: string;
  created_at?: any;
  updated_at?: any;

  doctor?: DoctorInterface;
  patient?: PatientInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  doctor_id?: string;
  patient_id?: string;
}
