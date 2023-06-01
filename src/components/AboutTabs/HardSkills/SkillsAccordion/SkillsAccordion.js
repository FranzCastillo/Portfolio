// https://mui.com/material-ui/react-accordion/
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./SkillsAccordion.scss";
import ImageDisplay from "../ImageDisplay/ImageDisplay";

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
                        sx={{color: '#e6c4fd'}}>
                        Lenguajes para implementación de soluciones
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={"image-container"}>
                        <ImageDisplay
                            title={"Python"}
                            imageLink={"https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png"}
                        />
                        <ImageDisplay
                            title={"Java"}
                            imageLink={"https://www.stickersdevs.com.br/wp-content/uploads/2022/01/java-adesivo-sticker.png"}
                        />
                        <ImageDisplay
                            title={"JavaScript"}
                            imageLink={"data:image/png;base64,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"}
                        />
                        <ImageDisplay
                            title={"C++"}
                            imageLink={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Zf_KPU4Roia8TJ7iSVM3gvGYC_o6boWOBksoxN8TCgqyTyrAjNAqJRCRonpBWaJyzX4&usqp=CAU"}
                        />
                        <ImageDisplay
                            title={"C#"}
                            imageLink={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7qLH5G8iXg_hBBi3tXINbk2ALHF8803B56DURxsQG6oZw-WXC1YzeYKophxDa1Y3Afs&usqp=CAU"}
                        />
                        <ImageDisplay
                            title={"Kotlin"}
                            imageLink={"https://cms-assets.tutsplus.com/uploads/users/1499/posts/29820/preview_image/kotlin.jpg"}
                        />
                    </div>
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
                    <Typography sx={{color: '#e6c4fd'}}>
                        Frontend y Backend
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={"panel-title"}>
                        <Typography>
                            Frontend
                        </Typography>
                    </div>
                    <div className={"image-container"}>
                        <ImageDisplay
                            title={"HTML5"}
                            imageLink={"data:image/png;base64,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"}
                        />
                        <ImageDisplay
                            title={"CSS"}
                            imageLink={"https://img.icons8.com/color/96/000000/css3.png"}
                        />
                        <ImageDisplay
                            title={"Sass"}
                            imageLink={"https://img.icons8.com/color/96/000000/sass.png"}
                        />
                        <ImageDisplay
                            title={"Material UI"}
                            imageLink={"https://img.icons8.com/color/96/000000/material-ui.png"}
                        />
                    </div>
                    <div className={"panel-title"}>
                        <Typography>
                            Backend (PERN Stack)
                        </Typography>
                    </div>
                    <div className={"image-container"}>
                        <ImageDisplay
                            title={"Supabase"}
                            imageLink={"https://yt3.googleusercontent.com/NqiGfwN1LVktrPKrSDjWCdWL1B2O8KzPKSmXowT91w8-Z6PUgZgj0qpXIj5AxYPevf3_rB-I=s900-c-k-c0x00ffffff-no-rj"}
                        />
                        <ImageDisplay
                            title={"ExpressJS"}
                            imageLink={"https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"}
                        />
                        <ImageDisplay
                            title={"ReactJS"}
                            imageLink={"https://img.icons8.com/color/96/000000/react-native.png"}
                        />
                        <ImageDisplay
                            title={"NodeJS"}
                            imageLink={"https://img.icons8.com/color/96/000000/nodejs.png"}
                        />
                    </div>
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
                    <Typography sx={{color: '#e6c4fd'}}>
                        Herramientas para la creación y administracion de Bases de Datos
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={"image-container"}>
                        <ImageDisplay
                            title={"MySQL"}
                            imageLink={"https://img.icons8.com/color/96/000000/mysql-logo.png"}
                        />
                        <ImageDisplay
                            title={"PostgreSQL"}
                            imageLink={"https://img.icons8.com/color/96/000000/postgreesql.png"}
                        />
                        <ImageDisplay
                            title={"Oracle DB"}
                            imageLink={"https://img.icons8.com/color/96/000000/oracle-logo.png"}
                        />
                    </div>
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
                    <Typography sx={{color: '#e6c4fd'}}>
                        Tecnologías con las que presenta experiencia
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={"image-container"}>
                        <ImageDisplay
                            title={"Power BI"}
                            imageLink={"https://img.icons8.com/color/96/000000/power-bi.png"}
                        />
                        <ImageDisplay
                            title={"Tableau"}
                            imageLink={"https://img.icons8.com/color/96/000000/tableau-software.png"}
                        />
                        <ImageDisplay
                            title={"Python"}
                            imageLink={"https://img.icons8.com/color/96/000000/python.png"}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}