import { FC } from "react";
import { MainPageProps } from "./MainPage.types";
import classes from "./MainPage.module.scss";
import Container from "@mui/material/Container";
import ChartColumn from "features/ChartColumn";
import { Chart } from "widgets/Chart";


const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <Container className={classes.main}>
      <div className={classes.main__chart}>
        <Chart />
      </div>
    </Container>
  );
};

export default MainPage;
