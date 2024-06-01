import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';

import { lightThemeOptions } from 'shared/const/theme';

const theme = createTheme(lightThemeOptions);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    );
}
 
export default ThemeProvider;