// https://mui.com/material-ui/react-tabs/
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EducationTimeline from "./Education/EducationTimeline";
import SkillsAccordion from "./HardSkills/SkillsAccordion/SkillsAccordion";
import SoftSkillsDisplay from "./SoftSkills/SoftSkillsDisplay";
import Experience from "./Experience/Experience";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3, padding: '5px'}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AboutTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'rgba(86,35,141,0.8)',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Tabs About Franz"
                    variant="scrollable"
                    scrollButtons="auto"
                    keepMounted={true}
                    textColor={"inherit"}
                    indicatorColor={"secondary"}
                >
                    <Tab label="Educación" {...a11yProps(0)} />
                    <Tab label="Experiencia" {...a11yProps(1)} />
                    <Tab label="Hard Skills" {...a11yProps(2)} />
                    <Tab label="Soft Skills" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <EducationTimeline/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Experience />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SkillsAccordion />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <SoftSkillsDisplay  />
            </TabPanel>
        </Box>
    );
}