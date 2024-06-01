import { FC } from "react";
import { ChartComparisonProps } from "./ChartComparison.types";
import classes from "./ChartComparison.module.scss";
import Chip, { ChipProps } from "@mui/material/Chip";
import { styled } from '@mui/material/styles';
import { ArrowUpIcon, ArrowDownIcon } from "shared/ui/Icons";

const ChipForComparison = styled(Chip)<ChipProps>(({ theme }) => ({
  "& .MuiChip-label": {
    padding: "4px 7px",
  }
}));

const ChartComparison: FC<ChartComparisonProps> = ({ className, from, to }) => {
  const fromTotal = Object.values(from).reduce((acc, cur) => acc + cur, 0);
  const toTotal = Object.values(to).reduce((acc, cur) => acc + cur, 0);
  
  const delta =  toTotal - fromTotal;
  const color = 
    delta > 0 
    ? "success" 
    : delta < 0 
    ? "error" : "info"
  const label = delta > 0 ? "+" + delta : delta;

  return (
    <ChipForComparison 
      size="small"
      variant="filled"
      color={color}
      className={className}
      label={<span className={classes.label}>
        {delta > 0 && <ArrowUpIcon />}
        {delta < 0 && <ArrowDownIcon />}
        {label}
      </span>}
    />
  );
};

export default ChartComparison;
