import Image from "next/image";
import styles from "./page.module.css";
import MultiStepForm from "./Components/Multiform";
import { Box, Card, Grid, Typography } from "@mui/material";
import { AppBar, Toolbar,  Button, Container } from '@mui/material';
import ResponsiveAppBar from "./Components/NavBar";

export default function Home() {
  return (
  <>     
  <ResponsiveAppBar/>


<main className={styles.main}>

      <MultiStepForm />
    </main></>
  );
}
