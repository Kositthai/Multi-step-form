import { Card, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import InputField from './InputField';
import TogglePlan from './TogglePlan';
import CheckboxWithCheckBox from './CheckboxWithCheckBox';
import CheckboxWithIcon from './CheckboxWithIcon';
import Overview from '../pages/Overview';
import ThankYou from '../pages/ThankYou';

function MultiStepInfo({ step, item, plan, setPlan, isToggled, handleToggle }) {
  const theme = useTheme();
  const { darkText, lightText } = theme.palette.customColors;

  // maybe should set default value for plan information?

  const handlePlan = (info) => {
    setPlan((prev) => ({
      ...prev,
      selectPlan: info,
    }));
  };

  const handleAddOns = (addOnItem) => {
    // add ons pass the whole info
    let temp;

    if (plan.addOns.includes(addOnItem)) {
      temp = plan.addOns.filter((item) => item.id !== addOnItem.id); // remove array of addOns item
      // temp = { ...plan, addOns: removeAddOns }; // copy plan item then inside update addOns items
      // instead of copying plan here, we can do it in setPlan instead because we do it both if item exists or not exist
    } else {
      temp = [...plan.addOns, addOnItem];
    }

    setPlan((prev) => ({ ...prev, addOns: temp }));
  };

  const handleRendering = (info) => {
    if (info?.type === 'text')
      return (
        <Box key={info.id}>
          <InputField info={info} />
        </Box>
      );
    else if (info?.type === 'checkbox_1')
      return (
        <Box sx={{ margin: '1rem 0', flex: 1 }} key={info.id}>
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
    else if (info?.type === 'checkbox_2')
      return (
        <Box key={info.id}>
          <CheckboxWithCheckBox
            info={info}
            plan={plan}
            handlePlan={handlePlan}
            handleAddOns={handleAddOns}
            setPlan={setPlan}
          />
        </Box>
      );
  };
  console.log({ step });

  return (
    <>
      <Box sx={{ marginBottom: '1rem' }}>
        <Typography variant="h5" sx={{ color: darkText, fontWeight: '600' }}>
          {item.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: lightText }}>
          {item.description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: step == 1 ? { xs: 'block', md: 'flex' } : 'block',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        {item?.fields?.map((info) => handleRendering(info))}
      </Box>

      {step === 1 && (
        <TogglePlan handleToggle={handleToggle} isToggled={isToggled} />
      )}
    </>
    // </Card>
  );
}

export default MultiStepInfo;
