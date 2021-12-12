import * as React from "react"

const Card = ({ theme, icon, title, description, cta, link, ...rest }) => {
  return (
    <a href={link} className={`flex flex-col rounded pl-10 pr-10 md:pr-36 pt-10 pb-8 ${theme}`} {...rest}>
      <div className="mb-6">{icon}</div>

      <h4 className="font-bold text-3xl mb-4">{title}</h4>

      <div className="mb-10">{description}</div>

      <div className="mt-auto font-bold">{cta}</div>
    </a>
  )
};

export default Card