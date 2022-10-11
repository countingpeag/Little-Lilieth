import { useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import logo from '../../../images/logo.png';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import '../../../Styles/contact.css';

const Contact = ({theme}) => {

    const form = useRef();
    const [ t ] = useTranslation();

    const submitEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs.sendForm('service_lq9uvtg', 'template_eocj2b8', form.current, 'URtBvALS0m0e3VJ2G')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
                            <TextField type="text" color="secondary" name="user_email" label="Email" variant="outlined" className="field-size" required/>
                        </Grid>
                        <Grid xs={12} className="margin-size">
                            <TextField type="text" color="secondary" name="user_phone" label="Phone Number" variant="outlined" className="field-size"/>
                        </Grid>
                        <Grid xs={12} className="margin-size">
                            <TextField type="text" color="secondary" name="message" label="Message" multiline rows={10} className="field-size" required/>
                            <div className="button-padding">
                                <Button type="submit" color="secondary" variant="contained" className="field-size" >SEND</Button>
                            </div>
                        </Grid>
                    </form>
                </ThemeProvider>
            </Grid>
        </Grid>
    );
}

export default Contact;