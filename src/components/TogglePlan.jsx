import { Box, FormControlLabel, Switch, useTheme } from '@mui/material';

function TogglePlan({ handleToggle, isToggled }) {
  const theme = useTheme();
  const { lightBg, darkText, lightText } = theme.palette.customColors;

  return (
    <Box
      container={true}
      sx={{
        background: lightBg,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        borderRadius: '5px',
        fontSize: '14px',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          textAlign: 'end',
          color: isToggled ? lightText : darkText,
        }}
      >
        Monthly
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <FormControlLabel
          control={<Switch checked={isToggled} onChange={handleToggle} />}
          sx={{ margin: '0' }}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: 'start',
          color: !isToggled ? lightText : darkText,
        }}
      >
        Yearly
      </Box>
    </Box>
  );
}

export default TogglePlan;
