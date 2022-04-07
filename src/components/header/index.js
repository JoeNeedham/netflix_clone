import React from 'react';
import { Link } from 'react-router-dom';

import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Feature,
    FeatureCallOut,
    Text,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background { ...restProps}>{children}</Background> : children;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature { ...restProps}>{children}</Feature>
};


Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container { ...restProps}>{children}</Container>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut { ...restProps}>{children}</FeatureCallOut>
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text { ...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <TextLink { ...restProps}>{children}</TextLink>;
};


Header.ButtonLink = function Link({ children, ...restProps }) {
    return <ButtonLink { ...restProps}>{children}</ButtonLink>;
};

Header.Logo = function Headerlogo({ to, ...restProps }) {
    return (
        <Link to={to}>
            <Logo { ...restProps } />
        </Link>
    );
};