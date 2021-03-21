import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));

const Usuarios = React.lazy(() => import('../pages/usuarios'));
const InserirEditarUsuario = React.lazy(() => import('../pages/inserirEditarUsuario'));
const Livros = React.lazy(() => import('../pages/livros'));
const InserirEditarLivro = React.lazy(() => import('../pages/inserirEditarLivro'));


// handle auth and authorization

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                return <Redirect to={{ pathname: '/' }} />;
            }
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/usuarios" />,
    route: PrivateRoute,
};


const UsuarioRoute = {
    path: '/usuarios',
    name: 'Usuarios',
    icon: 'uil-briefcase',
    header: '',
    component: Usuarios,
    route: PrivateRoute
};

const InserirEditarUsuarioRoute = {
    path: '/inserirEditarUsuario',
    component: InserirEditarUsuario,
    route: PrivateRoute
};

const LivrosRoute = {
    path: '/livros',
    name: 'Livros',
    icon: 'uil-briefcase',
    header: '',
    component: Livros,
    route: PrivateRoute
};

const InserirEditarLivroRoute = {
    path: '/inserirEditarLivro',
    component: InserirEditarLivro,
    route: PrivateRoute
};


const appRoutes = [
    UsuarioRoute,
    InserirEditarUsuarioRoute,
    LivrosRoute,
    InserirEditarLivroRoute,
];


// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [rootRoute, ...appRoutes, authRoutes];

const authProtectedRoutes = [ ...appRoutes];

const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, authProtectedRoutes, allFlattenRoutes };
