import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useRef, useState, SyntheticEvent} from 'react';
import handlePhone from '../../../utilities/validatePhone';
import handleEmail from '../../../utilities/validateEmail';

import logo from '../../../images/logo.png';

import '../../../Styles/contact.css';

const Contact = ({theme}) => {

    const form = useRef();
    const [ t ] = useTranslation();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const [warning, setWarning] = useState(false)
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const submitEmail = (e) => {
        
        e.preventDefault();
        setLoading(true);

        console.log(handleEmail(email));
        console.log(handlePhone(phone));

        if(handleEmail(email) && handlePhone(phone)){
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                setLoading(false);
                setSuccess(true);
                console.log(result.text);
            }, 
            (error) => {
                setLoading(false);
                setFailure(true);
                console.log(error.text);
                
            });
        }
        else{
            setLoading(false);
            setWarning(true);
        }


    }

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        
        setSuccess(false);
        setFailure(false);
        setWarning(false);
    }

    return (
        <Grid container columns={{ xs:12 }}>
            <Grid xs={12} className="subject-margin">
                <h1>{ t('contact.title') }</h1>
            </Grid>
            <Grid xs={12} md={6} >
                <Grid xs={12}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                </Grid>
                <Grid xs={12} className="text" >
                    <h3>{ t('contact.tagline') }</h3>
                </Grid>
            </Grid>
            <Grid xs={12} md={6}>
                <ThemeProvider theme={theme}>
                    <form ref={form} onSubmit={submitEmail}>
                        <Grid xs={12} className="margin-size">
                            <TextField type="text" color="secondary" name="user_name" label="Name" variant="outlined" className="field-size" required/>
                        </Grid>
                        <Grid xs={12} className="margin-size">
                            <TextField type="text" color="secondary" onChange={event => setEmail(event.target.value)} name="user_email" label="Email" variant="outlined" className="field-size" required/>
                        </Grid>
                        <Grid xs={12} className="margin-size">
                            <TextField type="text" color="secondary" onChange={event => setPhone(event.target.value)} name="user_phone" label="Phone Number" variant="outlined" className="field-size"/>
                        </Grid>
                        <Grid xs={12} className="margin-size">
                            <TextField type="text" color="secondary" name="message" label="Message" multiline rows={10} className="field-size" required/>
                            <div className="button-padding">
                                <Button type="submit" color="secondary" variant="contained" className="field-size" >
                                    {
                                        loading ? <CircularProgress /> : "SEND"
                                    }
                                </Button>
                            </div>
                        </Grid>
                    </form>
                </ThemeProvider>
            </Grid>

            <div>
                <Snackbar open={success} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'botton', horizontal: 'center'}}>
                    <Alert onClose={handleClose} severity="success">
                        Your message was sent <strong>successfully</strong>
                    </Alert>
                </Snackbar>
            </div>

            <div>
                <Snackbar open={failure} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'botton', horizontal: 'center'}}>
                    <Alert onClose={handleClose} severity="error">
                        Ops! something went wrong. <strong>Try it again in few minutes.</strong>
                    </Alert>
                </Snackbar>
            </div>

            
            <div>
                <Snackbar open={warning} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'botton', horizontal: 'center'}}>
                    <Alert onClose={handleClose} severity="warning">
                        { !handleEmail(email)? "Your email is not valid. Enter a valid email." : "Your Phone Number is not valid. Enter a valid number"}
                    </Alert>
                </Snackbar>
            </div>
        </Grid>
    );
}

export default Contact;