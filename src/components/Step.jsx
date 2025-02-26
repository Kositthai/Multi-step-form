import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const Step = ({ stepInfo, stepCount }) => {
  const theme = useTheme();
  const { lightBlue, darkText, lightText } = theme.palette.customColors;

  return (
    <>
      {stepInfo?.map((step, index) => (
        <Box
          sx={{
            display: {
              xs: 'block',
              md: 'flex',
              gap: '1rem',
            },
          }}
        >
          <Box
            key={index}
            sx={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border:
                step == step.count
                  ? `solid ${lightBlue} 1px`
                  : 'solid white 1px',
              color: step.count == stepCount ? darkText : 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              margin: '5px',
              background: step.count == stepCount ? lightBlue : 'transparent',
            }}
          >
            {step.count}
          </Box>
          <Box
            sx={{
              contentVisibility: { xs: 'hidden', md: 'visible' },
            }}
          >
            <Typography
              sx={{
                textTransform: 'uppercase',
                color: lightText,
                fontWeight: 500,
              }}
            >
              {step.name}
            </Typography>
            <Typography
              sx={{
                textTransform: 'uppercase',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {step.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Step;
