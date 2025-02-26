import { Box, Card, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function CheckboxWithIcon({ info, handlePlan, plan, isToggled }) {
  const theme = useTheme();
  const { darkText, lightText, lightBg } = theme.palette.customColors;

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          gap: '1rem',
          padding: '.5rem',
          border: plan?.selectPlan?.id === info.id && '2px solid blue',
          background: plan?.selectPlan?.id === info.id && lightBg,
          cursor: 'pointer',
        }}
        onClick={() => handlePlan(info)}
      >
        <Box>
          <img src={info.icon} />
        </Box>
        <Box>
          <Typography
            sx={{ color: darkText, fontWeight: '600', fontSize: '16px' }}
          >
            {info.name}
          </Typography>
          <Typography sx={{ color: lightText, fontSize: '14px' }}>
            $ {isToggled ? info.yearly : info.monthly}/
            {plan?.subscription === 'yearly' ? 'yr' : 'mo'}
          </Typography>
          {isToggled && (
            <Typography
              sx={{ color: darkText, fontWeight: '600', fontSize: '12px' }}
            >
              {info.promotion}
            </Typography>
          )}
        </Box>
      </Card>
    </Box>
  );
}

export default CheckboxWithIcon;
