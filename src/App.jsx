import React from 'react';
import Sidebar from './components/Sidebar';
import MultiStepInfo from './components/MultiStepInfo';
import { Box, Button, Card } from '@mui/material';
import { useState } from 'react';
import data from './data/personalInfo';
import { useTheme } from '@emotion/react';
import ThankYou from './pages/ThankYou';
import Grid from '@mui/material/Grid2';
import Header from './components/Header';
import sidebarMobile from './assets/images/bg-sidebar-mobile.svg';
import sidebarDesktop from './assets/images/bg-sidebar-desktop.svg';
import Overview from './pages/Overview';
import { PersonalSchema } from './functions/PersonalInfoValidation';

function App() {
  const theme = useTheme();
  const { lightText, purplishBlue } = theme.palette.customColors;
  const [step, setStep] = useState(0);
  const [plan, setPlan] = useState({
    selectPlan: null,
    addOns: [],
    subscription: 'monthly',
  });
  const [isToggled, setIsToggled] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleNextStep = async () => {
    if (step > 0) {
      if (!plan.selectPlan) return;
    }

    try {
      await PersonalSchema.validate(formData, { abortEarly: false });
      setStep((prev) => prev + 1); // Only go to next step if validation passes
    } catch (validationError) {
      // Convert Yup errors to object format

      const errorObj = {};
      validationError.inner.forEach((err) => {
        errorObj[err.path] = err.message;
      });
      setErrors(errorObj);
    }
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
                {step === data.length + 1 ? (
                  <ThankYou />
                ) : step === data.length ? (
                  <>
                    <Header
                      title="Finishing up"
                      description="Double-check everything looks OK before confirming."
                    />
                    <Overview plan={plan} />
                  </>
                ) : (
                  <MultiStepInfo
                    step={step}
                    item={data[step]}
                    plan={plan}
                    setPlan={setPlan}
                    isToggled={isToggled}
                    setIsToggled={setIsToggled}
                    handleToggle={handleToggle}
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    setErrors={setErrors}
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
              {step < data.length + 1 && step > 0 ? (
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
