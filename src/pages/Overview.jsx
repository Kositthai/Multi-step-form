import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material';

function Overview({ plan }) {
  const theme = useTheme();
  const { darkText, lightText, lightBg } = theme.palette.customColors;
  const [sum, setSum] = useState(0);

  const handleSubscriptionCalculation = () => {
    const tempSum = [];

    if (plan?.subscription === 'yearly') {
      tempSum.push(plan?.selectPlan.yearly);
      plan.addOns.forEach((item) => tempSum.push(item.yearly));
    } else {
      tempSum.push(plan?.selectPlan.monthly);
      plan.addOns.forEach((item) => tempSum.push(item.monthly)); // using forEach to loop over item instead of map. since map will return an array
    }

    const calculatedSum = tempSum.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });

    setSum(calculatedSum);
  };

  useEffect(() => {
    handleSubscriptionCalculation();
  }, [plan]);

  return (
    <Box>
      <Box sx={{ bgcolor: lightBg, padding: '1rem' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Box sx={{ marginBottom: '.2rem' }}>
            <Typography
              sx={{
                fontWeight: '600',
                color: darkText,
                textTransform: 'capitalize',
              }}
            >
              {plan?.selectPlan?.name} ({plan.subscription})
            </Typography>
            <Button
              sx={{
                textDecoration: 'underline',
                color: lightText,
                textTransform: 'capitalize',
                padding: '.5rem 0',
                justifyContent: 'left',
              }}
            >
              Change
            </Button>
          </Box>
          <Box sx={{ alignSelf: 'center' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>
              $
              {plan?.subscription === 'yearly'
                ? plan?.selectPlan.yearly
                : plan?.selectPlan.monthly}
              /{plan?.subscription === 'yearly' ? 'yr' : 'mo'}
            </Typography>
          </Box>
        </Box>
        <hr />
        <Box sx={{ margin: '.8rem 0' }}>
          {plan?.addOns.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '.5rem 0',
              }}
            >
              <Typography sx={{ fontSize: '14px', color: lightText }}>
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: '14px', color: darkText }}>
                +${plan.subscription === 'yearly' ? item.yearly : item.monthly}/
                {plan?.subscription === 'yearly' ? 'yr' : 'mo'}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem 1rem 0 1rem',
        }}
      >
        <Typography
          sx={{
            textTransform: 'capitalize',
            color: lightText,
            fontSize: '14px',
          }}
        >
          Total ({plan.subscription})
        </Typography>
        <Typography sx={{ fontWeight: '600' }}>
          ${sum}/{plan?.subscription === 'yearly' ? 'yr' : 'mo'}
        </Typography>
      </Box>
    </Box>
  );
}

export default Overview;
