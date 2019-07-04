import styled from 'styled-components'

export const AuthorsListWrapper = styled.section`
    margin-top: 1rem;
`

export const AuthorsListHeader = styled.span``

export const AuthorsListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`

export const AuthorsListElement = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.4rem 0.6rem;
    img {
        flex-shrink: 0;
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        padding: 0;
        margin: 0;
        border-radius: 100%;
    }
    span {
        display: block;
        text-align: center;
        font-size: 0.8rem;
    }
`
