import React from 'react'

import classes from './ScrollableDiv.module.css'

const ScrollableDiv = (props) => {
  return (
    <div className={classes.scrollableDiv + ' ' + props.className} style={props.style}>{props.children}</div>
  )
}

export default ScrollableDiv