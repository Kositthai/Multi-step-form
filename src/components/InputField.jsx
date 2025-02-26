import { useTheme } from '@mui/material';
import { TextField, InputLabel, Box } from '@mui/material';
import data from '../data/personalInfo';

function InputField({ info }) {
  const theme = useTheme();
  const { darkText } = theme.palette.customColors;

  return (
    <>
      <Box key={info.id} sx={{ margin: '1rem 0' }}>
        <InputLabel sx={{ color: darkText }}>{info.label}</InputLabel>
        <TextField placeholder={info.placeholder} sx={{ width: '100%' }} />
      </Box>
    </>
  );
}

export default InputField;
