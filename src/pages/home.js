import React from 'react'
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from '../containers/header';
import { OptForm } from '../components';

export default function home() {
    return (
        <>
            <HeaderContainer />
            <JumbotronContainer/>
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
