import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Home.scss";

function Home() {
  return (
    <Container
      className="home"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "rgba(227, 132, 255, 0.1)",
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <Typography
        className="title"
        variant="h4"
        component="h1"
        gutterBottom
      >
        ¡Hola! Soy
        {" "}
        <span id="name">Francisco Castillo.</span>
        👋
      </Typography>
      <Typography
        className="title"
        variant="h5"
        component="h2"
        gutterBottom
      >
        Muchos me conocen como
        {" "}
        <span id="nickname">Franz.</span>
        👨‍💻
      </Typography>
    </Container>
  );
}

export default Home;
