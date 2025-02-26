import data from '../data/personalInfo';
import { Box, Typography } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Grid2 } from '@mui/material';
import { useTheme } from '@mui/material';
import { Card } from '@mui/material';

function CheckboxWithCheckBox({ info, handleAddOns, plan }) {
  const theme = useTheme();
  const { darkText, lightText, purplishBlue, lightBg } =
    theme.palette.customColors;

  const isSelected = plan?.addOns.some((item) => item.id === info.id);

  return (
    <Card
      variant="outlined"
      sx={{
        border: isSelected && '2px solid blue',
        background: isSelected && lightBg,
        margin: '.5rem 0',
        padding: '1rem .5rem',
      }}
      onClick={() => handleAddOns(info)}
    >
      <Grid2 container={true}>
        <Grid2
          size={{ xs: 2, textAlign: 'center' }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <FormControlLabel
            control={<Checkbox checked={isSelected} />}
            sx={{
              margin: '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{ color: darkText, fontSize: '14px', fontWeight: '600' }}
          >
            {info.name}
          </Typography>
          <Typography sx={{ color: lightText, fontSize: '14px' }}>
            {info.des}
          </Typography>
        </Grid2>
        <Grid2
          size={{ xs: 2 }}
          sx={{
            color: purplishBlue,
            fontSize: '10px',
            textAlign: 'center',
            alignContent: 'center',
          }}
        >
          <Typography
            sx={{
              color: purplishBlue,
              fontSize: '10px',
              textAlign: 'center',
              alignContent: 'center',
            }}
          >
            +${plan.subscription === 'yearly' ? info.yearly : info.monthly}/
            {plan?.subscription === 'yearly' ? 'yr' : 'mo'}
          </Typography>
        </Grid2>
      </Grid2>
    </Card>
  );
}

export default CheckboxWithCheckBox;
