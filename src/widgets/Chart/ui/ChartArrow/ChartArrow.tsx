import { FC } from "react";
import { ChartArrowProps } from "./ChartArrow.types";
import classes from "./ChartArrow.module.scss";
import cx from "classnames";

const ChartArrow: FC<ChartArrowProps> = ({
  className,
  type
}) => {
  return (
      <div className={classes.container}>
        {type === "first" && (
          <div className={cx(classes.arrow, classes.arrow__start, classes.arrow__first)}/>
        )}
        {type === "nth" && (
          <>
            <div className={cx(classes.arrow, classes.arrow__end)}/>
            <div className={cx(classes.arrow, classes.arrow__start)}/>
          </>
        )}
        {type === "last" && (
          <div className={cx(classes.arrow, classes.arrow__end, classes.arrow__last)}/>
        )}
      </div>
  );
};

export default ChartArrow;
