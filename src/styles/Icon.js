import React from 'react'

export const Icon = ({ faIcon, id }) => {
  return (
    <>
      <p key={id}>
        <i className={faIcon}></i>
      </p>
    </>
  )
}
