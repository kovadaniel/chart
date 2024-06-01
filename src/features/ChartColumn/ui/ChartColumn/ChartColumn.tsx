import { FC } from "react";
import { ChartColumnProps } from "./ChartColumn.types";
import classes from "./ChartColumn.module.scss";
import Box from "@mui/material/Box";
import cx from "classnames";

const ChartColumn: FC<ChartColumnProps> = ({
  className, 
  title, 
  metric,
  delta,
}) => {
  return (
    <div className={classes.wrap}>
      {typeof metric === "number" 
      ? (
        <div className={classes.column}>
          <Box 
            className={cx(classes.column__section, classes.column__section_base)}
            height={metric * delta}
          >
            <span className={classes.column__label}>{metric}</span>
          </Box>
        </div>
      ) : (
        <div className={classes.column}>
          <Box 
            className={cx(classes.column__section, classes.column__section_front)}
            height={metric.front * delta}
          >
            {metric.front}
          </Box>
          <Box
            className={cx(classes.column__section, classes.column__section_back)}
            height={metric.back * delta}
          >
            {metric.back}
          </Box>
          <Box
            className={cx(classes.column__section, classes.column__section_db)}
            height={metric.db * delta}
          >
            {metric.db}
            </Box>
        </div>
      )}
      <div className={classes.column__title}>
        {title}
      </div>
    </div>
  );
};

export default ChartColumn;
