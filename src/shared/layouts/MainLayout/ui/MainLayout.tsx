import { memo } from 'react';
import { MainLayoutProps } from "./MainLayout.types";
import classes from "./MainLayout.module.scss";
import cx from "classnames";
import Container from '@mui/material/Container';


const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, header } = props;

  return (
    <Container className={cx(classes.MainLayout, className)}>
      <header className={classes.header}>{header}</header>
      <main className={classes.content}>{content}</main>
    </Container>
  );
});

export default MainLayout;
