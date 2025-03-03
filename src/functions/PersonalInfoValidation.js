import * as yup from 'yup';

export const PersonalSchema = yup.object({
  name: yup.string(),
  email: yup
    .string()
    .email('Invalid email format ')
    .required('This field is required'),
  phone: yup.string().required('This field is required'),
});
