import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/AuthProvider';
import Routes from './src/routers/Routes';

const App = () => {

    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default App;