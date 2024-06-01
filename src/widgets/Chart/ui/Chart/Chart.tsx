import { FC, useEffect } from "react";
import { ChartProps } from "./Chart.types";
import classes from "./Chart.module.scss";
import ChartColumn from "features/ChartColumn";
import cx from 'classnames';
import ChartArrow from "../ChartArrow";
import ChartComparison from "features/ChartComparison";
import ChartLegend from "features/ChartLegend";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getStatisticData } from "widgets/Chart/model/selectors/statistic";
import { fetchStatisticById } from "widgets/Chart/model/services/fetchStatisticById";
import { Skeleton } from "@mui/material";

const NORM_HEIGHT = 195;

const Chart: FC<ChartProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useSelector(getStatisticData);

  useEffect(() => {
    if (!data) {
      dispatch(fetchStatisticById("1"))
    }
  }, [])

  const delta = data ? NORM_HEIGHT / data.norm : 0;

  return (
    <div className={classes.container}>
      {isLoading || !data ? (
        <div className={cx(className, classes.chart)}>
          {new Array(4).fill(0).map((_, i) =>
            <Skeleton
              key={i}
              width={80}
              height={300}
              className={classes.chart_preloader}
            />
          )}
        </div>
      ) : (
        <div className={cx(className, classes.chart)}>
          <div className={classes.chart__column}>
            <ChartArrow type="first" />
            <ChartColumn title="dev" metric={data.dev} delta={delta} />
          </div>
          <ChartComparison from={data.dev} to={data.test} className={classes.chart__comparison} />
          <div className={classes.chart__column}>
            <ChartArrow type="nth" />
            <ChartColumn title="test" metric={data.test} delta={delta} />
          </div>
          <ChartComparison from={data.test} to={data.prod} className={classes.chart__comparison} />
          <div className={classes.chart__column}>
            <ChartArrow type="last" />
            <ChartColumn title="prod" metric={data.prod} delta={delta} />
          </div>
          <div className={classes.chart__column}>
            <ChartColumn title="норматив" metric={data.norm} delta={delta} />
          </div>
        </div>
      )}
      <div className={classes.chart__legend}>
        <ChartLegend label="Клиентская часть" type="client" />
        <ChartLegend label="Серверная часть" type="server" />
        <ChartLegend label="База данных" type="db" />
      </div>
    </div>

  );
};

export default Chart;
