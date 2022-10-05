import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import '../../../Styles/faq.css';

const FQA = () => {

    const [ t ] = useTranslation();

    const FAQuestions = [
        {
            question: t('faq.question1.question'),
            answer: t('faq.question1.answer')
        },
        {
            question: t('faq.question2.question'),
            answer: t('faq.question2.answer')
        },
        {
            question: t('faq.question3.question'),
            answer: t('faq.question3.answer')
        },
        {
            question: t('faq.question4.question'),
            answer: t('faq.question4.answer')
        },
        {
            question: t('faq.question5.question'),
            answer: t('faq.question5.answer')
        },
        {
            question: t('faq.question6.question'),
            answer: t('faq.question6.answer')
        },
        {
            question: t('faq.question7.question'),
            answer: t('faq.question7.answer')
        },
        {
            question: t('faq.question8.question'),
            answer: t('faq.question8.answer')
        }
    ];

    return (
        <Grid container columns={{ xs:12 }} className="main-faq">
            <Grid xs={12}>
                <h1>{ t('faq.title') }</h1>
            </Grid>
            <Grid xs={12}>
                {
                    FAQuestions.map( item =>(
                        <Accordion key={item.question}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={item.question}>
                                {item.question}
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.answer}
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default FQA;