import { Box, Typography, useTheme } from '@mui/material';

function Header({ title, description }) {
  const theme = useTheme();
  const { darkText, lightText } = theme.palette.customColors;
  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <Typography variant="h5" sx={{ color: darkText, fontWeight: '600' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: lightText }}>
        {description}
      </Typography>
    </Box>
  );
}

export default Header;
