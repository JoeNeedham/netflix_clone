import React from 'react';
import { Link } from 'react-router-dom';

import {
    Background,
    Container,
    HLink,
    Logo,
    Group,
    Picture,
    Profile,
    Dropdown,
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

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group { ...restProps}>{children}</Group>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut { ...restProps}>{children}</FeatureCallOut>
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile { ...restProps}>{children}</Profile>
};


Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture { ...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown { ...restProps}>{children}</Dropdown>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text { ...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <HLink { ...restProps}>{children}</HLink>;
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