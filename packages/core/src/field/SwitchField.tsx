import React, {ReactNode, MouseEventHandler} from 'react'

import {Box, Pos, Typo, Flex} from '../primitive'

export interface SwitchFieldProps {
  disabled?: boolean
  reverse?: boolean
  icon?: ReactNode
  children: ReactNode
  label: ReactNode
  description?: ReactNode
  onClick: MouseEventHandler
  onMouseEnter?: MouseEventHandler
}

export const SwitchField: React.FunctionComponent<SwitchFieldProps> = ({
  disabled,
  children,
  icon,
  label,
  reverse,
  description,
  onClick,
  onMouseEnter,
}) => (
  <Pos
    type="relative"
    pl={icon ? 9 : 0}
    cursor={disabled ? 'not-allowed' : 'pointer'}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
  >
    <Flex
      display="flex"
      direction={reverse ? 'row-reverse' : 'row'}
      justify={reverse ? 'flex-end' : 'space-between'}
      align="baseline"
    >
      {icon ? (
        <Pos
          type="absolute"
          top={0}
          left={0}
          width={6}
          height={6}
          children={icon}
        />
      ) : null}
      <Typo
        display="block"
        weight={300}
        size={4}
        height={6}
        color={disabled ? '#666' : '#000'}
        children={label}
      />
      <Box
        ml={reverse ? 0 : 3}
        mr={reverse ? 3 : 0}
        width={10}
        height={5}
        children={children}
      />
    </Flex>
    {description ? (
      <Box mt={1}>
        <Typo
          display="block"
          weight={300}
          size={3.5}
          height={5}
          color="#666"
          children={description}
        />
      </Box>
    ) : null}
  </Pos>
)
