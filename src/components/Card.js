import * as React from "react"

const Card = ({ theme, icon, title, description, cta, link, ...rest }) => {
  return (
    <a href={link} className={`flex flex-col rounded pl-10 pr-20 py-8 ${theme}`} {...rest}>
      <div className="mb-4">{icon}</div>

      <h4 className="font-bold text-3xl mb-4">{title}</h4>

      <div className="mb-6">{description}</div>

      <div className="mt-auto font-bold">{cta}</div>
    </a>
  )
};

export default Card