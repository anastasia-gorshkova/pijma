import React, {FC} from 'react'

import {Lnk, Card, Icon, IconProps, LinkControl} from '@qiwi/pijma-core'

const CardLink = Card.withComponent(Lnk)

export interface FooterIconLinkProps {
  href: string,
  target?: string,
  download?: string | boolean,
  rel?: string,
  title?: string,
  icon: IconProps['name'],
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void,
  onFocus?: () => void,
  onBlur?: () => void
}

export const FooterIconLink: FC<FooterIconLinkProps> = (props) => (
  <LinkControl
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <CardLink
        display="block"
        width={10}
        height={10}
        r={40}
        p={2}
        s={renderProps.hover || renderProps.focus || renderProps.active ? '0 0 0 1px #000' : '0 0 0 1px #ccc'}
        href={props.href}
        rel={props.rel}
        target={props.target}
        title={props.title}
        download={props.download}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        children={
          <Icon
            name={props.icon}
            color={renderProps.hover || renderProps.focus || renderProps.active ? '#000' : '#999'}
          />
        }
      />
    )}
  />
)
