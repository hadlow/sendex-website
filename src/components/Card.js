import * as React from "react"

const Card = ({ theme, icon, title, description, cta, link, ...rest }) => {
  return (
    <a href={link} className={`flex flex-col rounded pl-10 pr-14 py-8 ${theme}`} {...rest}>
      <h4 className="font-extrabold text-2xl mb-4">{title}</h4>

      <div className="">{description}</div>

      <div className="">{cta}</div>
    </a>
  )
};

export default Card