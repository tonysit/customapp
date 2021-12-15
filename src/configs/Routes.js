import * as React from 'react';

// all page screen
import RootScreen from '../components/views/root/Root';
import LoginScreen from '../components/views/login/Login';

const Routes = {
    root: { component: RootScreen, options: { title: 'Root Stack' } },
    login: { component: LoginScreen, options: { title: 'Login Stack' } },
};

export default Routes;