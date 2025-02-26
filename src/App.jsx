import React from 'react';
import Sidebar from './components/Sidebar';
import MultiStepInfo from './components/MultiStepInfo';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import data from './data/personalInfo';
import { useTheme } from '@emotion/react';
import ThankYou from './pages/ThankYou';
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid2';

import sidebarMobile from './assets/images/bg-sidebar-mobile.svg';
import sidebarDesktop from './assets/images/bg-sidebar-desktop.svg';
import Overview from './pages/Overview';

function App() {
  const theme = useTheme();
  const { lightText, purplishBlue, darkText } = theme.palette.customColors;
  const [step, setStep] = useState(0);
  const [plan, setPlan] = useState({
    selectPlan: null,
    addOns: [],
    subscription: 'monthly',
  });
  const [isToggled, setIsToggled] = useState(false);

  const handleNextStep = () => {
    if (step > 0) {
      if (!plan.selectPlan) return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handleGoBack = () => {
    if (step <= 0) return;

    setStep((prevStep) => prevStep - 1);
  };

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
    setPlan((prev) => ({
      ...prev,
      subscription: isToggled ? 'monthly' : 'yearly', // instead of passing is toggle boolean value, make a condition to return string
    }));
  };

  const steps = [
    ...data.map((item) => (
      <MultiStepInfo
        step={step}
        item={item}
        plan={plan}
        setPlan={setPlan}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        handleToggle={handleToggle}
      />
    )),
    <Overview plan={plan} />, // Step 4

    <ThankYou />, // Step 6
  ];

  console.log(steps);

  return (
    <Box
      sx={{
        height: '100vh',
        display: { xs: 'block', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: { xs: 'transparent', md: 'white' },
          width: '100%',
          maxWidth: { xs: 'auto', md: '800px' },
          margin: 'auto',
          fontFamily: 'Manrope',
          padding: { xs: 0, md: '20px' },
          borderRadius: { xs: 0, md: '20px' },
        }}
      >
        <Grid container>
          <Grid
            sx={{
              position: 'relative',
              padding: '1.5rem 0',
              backgroundImage: {
                xs: `url("${sidebarMobile}")`,
                md: `url("${sidebarDesktop}")`,
              },
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '10px',
              height: { xs: '18rem', md: 'auto' },
            }}
            size={{ xs: 12, md: 4 }}
          >
            <Sidebar step={step} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              position: { xs: 'fixed', md: 'static' },
              top: { xs: '8rem' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  width: { xs: 'auto', md: '100%' },
                  maxWidth: { xs: '80%', md: '100%' },
                  borderRadius: { xs: '10px', md: '0px' },
                  boxShadow: { xs: 'auto', md: 0 },
                  padding: { xs: '1.5rem', md: '4rem' },
                }}
              >
                {/* {step === data.length + 1 ? (
                  <ThankYou />
                ) : step === data.legth ? (
                  <Overview plan={plan} />
                ) : (
                  <Box>
                    {data.map(
                      (item, index) =>
                        index === step && ( // only return the item that matches the condition
                          <MultiStepInfo
                            step={step}
                            item={item}
                            plan={plan}
                            setPlan={setPlan}
                            isToggled={isToggled}
                            setIsToggled={setIsToggled}
                            handleToggle={handleToggle}
                          />
                        )
                    )}
                  </Box>
                )} */}

                {step === data.length + 1 ? (
                  <ThankYou />
                ) : step === data.length ? (
                  <Overview plan={plan} />
                ) : (
                  <MultiStepInfo
                    step={step}
                    item={data[step]}
                    plan={plan}
                    setPlan={setPlan}
                    isToggled={isToggled}
                    setIsToggled={setIsToggled}
                    handleToggle={handleToggle}
                  />
                )}
              </Card>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '1rem',
              }}
            >
              {step > 0 ? (
                <Box
                  variant="contained"
                  onClick={handleGoBack}
                  sx={{
                    color: lightText,
                    bgcolor: 'transparent',
                    border: 'none',
                  }}
                >
                  Go back
                </Box>
              ) : (
                <Box></Box>
              )}

              {/* <Button
                variant="contained"
                onClick={handleNextStep}
                sx={{
                  background:
                    step === data.length - 1 ? purplishBlue : darkText,
                  textTransform: 'capitalize',
                }}
              >
                {step === 3 ? 'Confirm' : 'Next'}
              </Button> */}
              {step < data.length + 1 && (
                <Button
                  variant="contained"
                  onClick={handleNextStep}
                  sx={{ background: purplishBlue }}
                >
                  {step === data.length ? 'Confirm' : 'Next'}
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
