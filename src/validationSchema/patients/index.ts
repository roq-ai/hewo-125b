import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  medicinal_reminders: yup.string(),
  fitness_goals: yup.string(),
  user_id: yup.string().nullable(),
});
