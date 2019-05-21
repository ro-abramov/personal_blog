import React from "react"
import { Link } from "gatsby"

export const Pagination = ({ total, current }) => {
  return (
    <ul>
      {Array.from({ length: total }).map((_el, i) => {
        return (
          <li>
            <Link to={i === 0 ? `/` : `/page=${i + 1}`}>{i + 1}</Link>
          </li>
        )
      })}
    </ul>
  )
}
