import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children } = props;

    const store = setupStore();

    return <Provider store={store}>{children}</Provider>;
};
