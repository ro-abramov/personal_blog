import styled from 'styled-components'
import { breakpoints } from '../../utils/css/mixins'

export const ContactsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    font-size: 0.8rem;
    ${breakpoints.mobilePlus} {
        font-size: 1rem;
    }
`

export const ContactElement = styled.li`
    margin: 0 0.2rem;
    ${breakpoints.mobilePlus} {
        margin: 0 0.4rem;
    }
`
