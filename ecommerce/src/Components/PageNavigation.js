import React from 'react'
import { NavLink } from 'react-router-dom'
import { PageNavigationStyles } from '../Styles/PageNavigation'

const PageNavigation = ({name}) => {


  return (

    <PageNavigationStyles>
    
    <NavLink to="/">Home</NavLink>/{name}
    </PageNavigationStyles>
  )
}

export default PageNavigation