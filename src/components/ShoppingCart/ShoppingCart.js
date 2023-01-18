import Grid from '@mui/material/Unstable_Grid2';
import SubFooter from '../Footers/SubFooter';
import SubHeader from '../Headers/SubHeader';
import SubMenu from '../Menus/SubMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingElements from './ShoppingElements';
import ShoppingEmptyCart from './ShoppingEmptyCart';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, ReactNode, Fragment } from 'react';

import '../../Styles/shoppingCart.css';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const ShopingKart = ({images, theme}) => {

    const items = images;
    const matches = useMediaQuery('(min-width:600px)');

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
  
    const isStepOptional = (step: number) => {
      return step === 1;
    };
  
    const isStepSkipped = (step: number) => {
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
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  

    return (
        <Grid container>
            <Grid xs={12} className="list">
                { matches ? <SubHeader theme={theme} /> : <SubMenu theme={theme} /> }
            </Grid>
            <Grid xs={12}>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {
                            steps.map((label, index) => {
                                const stepProps: { completed ? : boolean } = {};
                                const labelProps: { optional ? : ReactNode } = {};
                                if (isStepOptional(index)) {
                                    labelProps.optional = (
                                    <Typography variant="caption">Optional</Typography>
                                    );
                                }
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
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
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </Fragment>
                        ) : (
                        <Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {
                                    isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                            Skip
                                        </Button>
                                    )
                                }
                                <Button onClick={handleNext}>
                                    { activeStep === steps.length - 1 ? 'Finish' : 'Next' }
                                </Button>
                            </Box>
                        </Fragment>
                    )}
                </Box>
            </Grid>
            <Grid xs={12} className="list">
                {
                    items.length<=0 ? <ShoppingEmptyCart /> : <ShoppingElements images={items} theme={theme} />
                }
            </Grid>
            <Grid xs={12}>
                <SubFooter theme={theme} />
            </Grid>
        </Grid>
    );
}

export default ShopingKart;