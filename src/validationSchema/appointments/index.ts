import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  doctor_id: yup.string().nullable(),
  patient_id: yup.string().nullable(),
});
