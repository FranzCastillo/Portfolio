import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import "./Education.scss";
import * as React from "react";
import Typography from "@mui/material/Typography";

const EducationTimeline = () => {
    return (
        <div className={"education"}>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="#FFD166">
                        Actualmente
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>Estudiante de <span id={"career"}>CS & IT</span> en UVG</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="#FFD166">
                        2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>Inició a estudiar en la <span
                        id={"place"}>Universidad del Valle de Guatemala</span></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="#FFD166">
                        2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        Graduado del <span id={"place"}>Colegio Suizo Americano </span> con un grado de
                        <span
                            id={"career"}> Bachillerato en Ciencias y Letras con orientación en Computación</span></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="#FFD166">
                        2003
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>Inició a estudiar en el Colegio Suizo Americano</TimelineContent>
                </TimelineItem>
            </Timeline>
            <Typography
                className={"title"}
                variant="p"
                component="p"
                gutterBottom
                sx={{
                    textAlign: 'center',
                }}
            >
            {/*    Si tuviera alguna certificación adicional, la colocaría acá*/}
            </Typography>
        </div>
    );
}

export default EducationTimeline;