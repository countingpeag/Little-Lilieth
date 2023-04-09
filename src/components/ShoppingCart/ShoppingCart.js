import Grid from '@mui/material/Unstable_Grid2';
import SubFooter from '../Footers/SubFooter';
import SubHeader from '../Headers/SubHeader';
import SubMenu from '../Menus/SubMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingElements from './ShoppingElements';
//import ShoppingEmptyCart from './ShoppingEmptyCart';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, ReactNode, Fragment } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '../../Styles/shoppingCart.css';
import ShoppingEmptyCart from './ShoppingEmptyCart';

const ShopingKart = ({images, theme}) => {

    const items = images;
    const matches = useMediaQuery('(min-width:600px)');
    const steps = ['Shopping Cart', 'Paymant Confirmation', 'Finished'];
    const components = [<ShoppingElements images={items} theme={theme} />, "NOTHING"];

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  

    return (
        <Grid container>
            <Grid xs={12} className="alignment">
                { matches ? <SubHeader theme={theme} /> : <SubMenu theme={theme} /> }
            </Grid>
            <Grid xs={12}>
            {
                items.length<=0 ? <ShoppingEmptyCart /> :
                    <ThemeProvider theme={theme}>
                        <Box sx={{ width: '100%' }} className="alignment">
                            <Stepper activeStep={activeStep}>
                                {
                                    steps.map((label, index) => {
                                        const stepProps: { completed ? : boolean } = {};
                                        const labelProps: { optional ? : ReactNode } = {};
                                        return (
                                            <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })
                                }
                            </Stepper>
                            {
                                activeStep === steps.length ? (
                                    <Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="doneButton">
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <Button theme={theme} variant="contained" onClick={handleReset}>Done</Button>
                                        </Box>
                                    </Fragment>
                                ) : (
                                <Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        {
                                            components[activeStep]
                                        }
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="boxStepper">
                                        <div className="backButton">
                                            <Button color={"secondary"} variant="contained" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                                Back
                                            </Button>
                                        </div>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <div className="proceedButton">
                                            <Button color={"secondary"} variant="contained" onClick={handleNext}>
                                                { activeStep === steps.length - 1 ? 'Pay' : 'Proceetd to checkout' }
                                            </Button>
                                        </div>
                                    </Box>
                                </Fragment>
                            )}
                        </Box>
                    </ThemeProvider>
            }
            </Grid>
            <Grid xs={12}>
                <SubFooter theme={theme} />
            </Grid>
        </Grid>
    );
}

export default ShopingKart;