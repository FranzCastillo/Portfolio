import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Chip from "./Chip/Chip";
import "./SoftSkillsDisplay.scss";

function SoftSkillsDisplay() {
  return (
    <Box sx={{ width: "100%" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          component="div"
        >
          Comunicación
        </Typography>
        <div className="chips-container">
          <Chip skill="Comunicación Efectiva" />
          <Chip skill="Escucha Activa" />
          {/* <Chip skill={"Transmisión de Ideas"} /> */}
        </div>
        <Typography
          variant="h6"
          component="div"
        >
          Trabajo en Equipo
        </Typography>
        <div className="chips-container">
          <Chip skill="Cooperativo" />
          <Chip skill="Trabajo Harmoniosamente con más gente" />
        </div>
        <Typography
          variant="h6"
          component="div"
        >
          Adaptabilidad
        </Typography>
        <div className="chips-container">
          <Chip skill="Flexible" />
          <Chip skill="Abierto al cambio" />
          <Chip skill="Versátil con nuevas situaciones y desafíos" />
        </div>
        <Typography
          variant="h6"
          component="div"
        >
          Resolución de Problemas
        </Typography>
        <div className="chips-container">
          <Chip skill="Pensamiento crítico y analítico" />
          <Chip skill="Creativo" />
        </div>
        <Typography
          variant="h6"
          component="div"
        >
          Liderazgo
        </Typography>
        <div className="chips-container">
          <Chip skill="Certificado en programas de Franklin Covey" />
          <Chip skill="Proactivo" />
        </div>
      </Container>
    </Box>
  );
}

export default SoftSkillsDisplay;
