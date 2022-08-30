import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import logo from '../../../images/logo.png';
import Button from '@mui/material/Button';
import '../../../Styles/contact.css';

const Contact = () => {
    return (
        <Grid container columns={{ xs:12 }}>
            <Grid xs={12}>
                <h1>CONTACT US</h1>
            </Grid>
            <Grid xs={12} md={6} >
                <Grid xs={12}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                </Grid>
                <Grid xs={12} className="text" >
                    <h3>Contact us and tell us how much you love our perfect products. Give us your opinion to be better every day.</h3>
                </Grid>
            </Grid>
            <Grid spacing={{ xs:1 }} xs={12} md={6}>
                <Grid xs={12}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" className="field-size"/>
                </Grid>
                <Grid xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className="field-size"/>
                </Grid>
                <Grid xs={12}>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" className="field-size"/>
                </Grid>
                <Grid xs={12}>
                    <TextField id="outlined-multiline-static" label="Message" multiline rows={10} className="field-size"/>
                    <div className="button-padding">
                        <Button color="primary" variant="contained" className="field-size">SEND</Button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Contact;