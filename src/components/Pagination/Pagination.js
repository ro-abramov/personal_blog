import React from 'react'
import * as atoms from './Pagination.atoms'
import { Link } from '../Link'

export const Pagination = ({ total, current }) => {
    return (
        <atoms.StyledList>
            {total <= 1
                ? null
                : Array.from({ length: total }).map((_el, i) => {
                      return (
                          <atoms.StyledListItem key={i} selected={i === current}>
                              <Link to={`/page=${i + 1}`}>{i + 1}</Link>
                          </atoms.StyledListItem>
                      )
                  })}
        </atoms.StyledList>
    )
}
