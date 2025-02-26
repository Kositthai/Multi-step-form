import { Box } from '@mui/material';
import Step from './Step';
import stepInfo from '../data/stepInfo';

const Sidebar = ({ step }) => {
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
        <Step stepInfo={stepInfo} stepCount={step + 1} />{' '}
      </Box>
    </Box>
  );
};

export default Sidebar;
