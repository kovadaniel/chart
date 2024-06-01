import { ReactElement } from "react";

export interface MainLayoutProps {
  className?: string;
  header?: ReactElement;
  content: ReactElement;
}
