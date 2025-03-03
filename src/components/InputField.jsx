import { useTheme, TextField, InputLabel, Box } from '@mui/material';
import * as yup from 'yup';
import { PersonalSchema } from '../functions/PersonalInfoValidation';

function InputField({ info, step, setFormData, formData, errors, setErrors }) {
  const theme = useTheme();
  const { darkText } = theme.palette.customColors;

  // if step === 1 then
  // make an object and grab all data
  // set it to state

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <Box key={info.id} sx={{ margin: '1rem 0' }}>
      <InputLabel sx={{ color: darkText }}>{info.label}</InputLabel>
      <TextField
        placeholder={info.placeholder}
        sx={{ width: '100%' }}
        value={formData[info.label.toLowerCase()] || ''}
        onChange={(e) => handleChange(info.label.toLowerCase(), e.target.value)}
        error={!!errors[info.label.toLowerCase()]} // Show error if exists
        helperText={errors[info.label.toLowerCase()]} // Display error message
      />
    </Box>
  );
}

export default InputField;
