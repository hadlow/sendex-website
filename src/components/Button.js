import * as React from "react"

const Button = ({ as, size, theme, children, ...rest }) => {
  let bg = ''
  let text = ''
  let fontSize = ''
  let padding = ''

  switch (size) {
    case 'sm':
      fontSize = 'text-sm'
      padding = 'px-6 py-2'
      break

    case 'lg':
      fontSize = 'text-lg'
      padding = 'px-10 py-4'
      break

    default:
      fontSize = 'text-lg'
      padding = 'px-8 py-3'
  }

  switch (theme) {
    case 'orange':
      bg = 'bg-orange'
      text = 'text-white'
      break

    default:
      bg = 'bg-blue-primary'
      text = 'text-white'
  }

  const className = `${bg} ${text} ${fontSize} ${padding} font-semibold rounded`
  const Tag = `${as}`

  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  )
};

export default Button