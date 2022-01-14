
import styled from 'styled-components'

import { PropsA, PropsContainer } from './interfaces.navbar';

export const Container = styled.div<PropsContainer> `
    background-color  : ${ props=>props.backgroundColor || 'white' };
    color             : ${ props=>props.color };
    margin            : 0 auto
    max-width         : ${ props=>props.maxWidth }px;
    padding           : 25px;
`

export const Content = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 2fr;
`

export const Nav = styled.nav`
    grid-column: 4/5;
`

export const Options = styled.ul`
    display:flex;
    justify-content:space-between;
`
export const A = styled.a<PropsA>`
    color:${props=>props.color};
    text-decoration:none;
    &:hover{
        font-weight:bold;
        color: ${ props=>props.hoverColor };

    }
`
