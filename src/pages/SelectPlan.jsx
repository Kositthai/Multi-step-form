import React from 'react';
import { Box } from '@mui/material';
import CheckboxWithIcon from '../components/CheckboxWithIcon';

function SelectPlan({
  info,
  plan,
  handlePlan,
  isToggled,
  setPlan,
  item = { item },
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem', // Add gap between items
        flexWrap: 'wrap', // Wrap items to the next line if they overflow
      }}
    >
      <CheckboxWithIcon
        info={info}
        plan={plan}
        checked={plan.subscription}
        handlePlan={handlePlan}
        setPlan={setPlan}
        isToggled={isToggled}
      />
    </Box>
  );
}

export default SelectPlan;
