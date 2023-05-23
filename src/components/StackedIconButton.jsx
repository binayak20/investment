import { Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const StackedIconButton = ({className, icon, link, label, iconSize, textSize, iconProps}) => {
  return (
    <>
      <Link to={link} className={`stacked-icon-btn ${!!className && className}`}>
        <UnstyledButton key={label} className="icon-btn">
          <ThemeIcon {...iconProps}>
            {icon}
          </ThemeIcon>
          <Text size={textSize} mt={7}>
            {label}
          </Text>
        </UnstyledButton>
      </Link>
    </>
  )
}

export default StackedIconButton