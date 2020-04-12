import React from "react";

import postStyles from "./poststyles.module.scss";

export const PortfolioHeader = (props) => {
  return (
    <div className={postStyles.postHeader}>
      <div>
        <h3 className={postStyles.type}>{props.type}</h3>
        <h1 className={postStyles.company}>{props.company}</h1>
        <h2 className={postStyles.role}>{props.role}</h2>
      </div>
        <div>
          <p className={postStyles.intro}>{props.intro}</p>
        </div>
    </div>
  )
}

export const BlogHeader = (props) => {
  return (
    <div className={postStyles.blogHeader}>
      <div>
        <h3 className={postStyles.type}>{props.type}</h3>
        <h1 className={postStyles.company}>{props.company}</h1>
        <h2 className={postStyles.role}>{props.role}</h2>
      </div>
        <div>
          <p className={postStyles.intro}>{props.intro}</p>
        </div>
    </div>
  )
}