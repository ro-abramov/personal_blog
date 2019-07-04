import React from 'react'
import * as atoms from './AuthorsList.atoms'

export function AuthorsList({ authors }) {
    return (
        <atoms.AuthorsListWrapper>
            <atoms.AuthorsListHeader>
                The article is created with the help of the community! Shout out to awesome:
            </atoms.AuthorsListHeader>
            <atoms.AuthorsListContainer>
                {authors.map(author => {
                    return (
                        <atoms.AuthorsListElement key={author.name}>
                            <img src={author.avatar} alt={`avatar of ${author.name}`} />
                            <span>{author.name}</span>
                        </atoms.AuthorsListElement>
                    )
                })}
            </atoms.AuthorsListContainer>
        </atoms.AuthorsListWrapper>
    )
}
