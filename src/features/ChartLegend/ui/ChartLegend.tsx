import { FC } from "react";
import { ChartLegendProps } from "./ChartLegend.types";
import classes from "./ChartLegend.module.scss";
import Chip, { ChipProps } from "@mui/material/Chip";
import { styled } from '@mui/material/styles';
import cx from "classnames";

const ChipForLegend = styled(Chip)<ChipProps>(({ theme }) => ({
  border: "none",
  "& .MuiChip-label": {
    padding: "4px 7px",
  }
}));

const ChartLegend: FC<ChartLegendProps> = ({ className, label, type }) => {
  return (
    <div className={cx(classes.legend, className)}>
      <div className={cx(
        classes.legend__icon,
        classes[`legend__icon_${type}`]
      )} />
      <span className={classes.legend__text}>{label}</span>
    </div>
  );
};

export default ChartLegend;
