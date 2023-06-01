// https://mui.com/material-ui/react-accordion/
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./SkillsAccordion.scss";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={"accordion"}>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                className={"panel"}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography
                        sx={{
                            width: '33%',
                            flexShrink: 0,
                            marginRight: '10px'
                        }}
                    >
                        Lenguajes de programación
                    </Typography>
                    <Typography
                        sx={{color: 'text.secondary'}}>
                        Lenguajes para implementación de soluciones
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className={"panel"}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography
                        sx={{
                            width: '33%',
                            flexShrink: 0,
                            marginRight: '10px'
                        }}
                    >
                        Desarrollo Web
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}}>
                        Frontend y Backend
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                className={"panel"}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography
                        sx={{
                            width: '33%',
                            flexShrink: 0,
                            marginRight: '10px'
                        }}
                    >
                        Bases de Datos
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}}>
                        Herramientas para la creación y administracion de Bases de Datos
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                className={"panel"}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography
                        sx={{
                            width: '33%',
                            flexShrink: 0,
                            marginRight: '10px'
                        }}
                    >
                        Análisis y Visualización de Datos
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}}>
                        Tecnologías con las que presenta experiencia
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}