// https://mui.com/material-ui/react-accordion/
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../HardSkills/SkillsAccordion/SkillsAccordion.scss";
import ExperienceList from "./ExperienceList/ExperienceList";

export default function Experience() {
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
                    expandIcon={<ExpandMoreIcon className={"icon"}/>}
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
                        Profesional
                    </Typography>
                    <Typography
                        sx={{color: '#e6c4fd'}}>
                        Experiencia en el ámbito profesional
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ExperienceList
                        items={[
                            "Profesor auxiliar de Algoritmos y Estructuras de Datos",
                            "Profesor auxiliar de Programación Orientada a Objetos",
                        ]}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className={"panel"}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={"icon"}/>}
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
                        Académico
                    </Typography>
                    <Typography sx={{color: '#e6c4fd'}}>
                        Experiencia en el ámbito académico
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ExperienceList
                        items={[
                            "2x Estudiante con Honor el Mérito Académico",
                            "Promedio global actual: 94",
                            "Bachiller en Ciencias y Letras con Orientación en Computación",
                        ]}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                className={"panel"}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={"icon"}/>}
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
                        Personal
                    </Typography>
                    <Typography sx={{color: '#e6c4fd'}}>
                        Experiencias destacables de formación
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ExperienceList
                        items={[
                            "Certificado de Liderazgo Franklin Covey",
                            "Voluntario en el evento Volcano Summit 2023"
                        ]}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}