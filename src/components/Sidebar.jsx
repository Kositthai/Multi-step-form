import { Box } from '@mui/material';
import Step from './Step';
import stepInfo from '../data/stepInfo';

const Sidebar = ({ step }) => {
  const handleStepCount = () => {
    if (step === stepInfo.length) {
      return step;
    } else {
      return step + 1;
    }
  };

  return (
    <Box
      sx={{
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: { xs: '1.5rem 0', md: '1rem' },
          flexDirection: { xs: 'row', md: 'column' },
          gap: { xs: '.5rem', md: '1.5rem' },
        }}
      >
        <Step stepInfo={stepInfo} stepCount={handleStepCount()} />{' '}
      </Box>
    </Box>
  );
};

export default Sidebar;
