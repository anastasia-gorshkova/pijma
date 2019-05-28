import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Card, Flex, FlexItem} from '@qiwi/pijma-core'
import {Paragraph, Text} from '../typography'

export interface ListProps {
  children: ReactNode[]
  type: 'step' | 'number' | 'bullet'
}
const ListType: {
  [type in NonNullable<ListProps['type']>]: keyof JSX.IntrinsicElements
} = {
  step: 'ol',
  number: 'ol',
  bullet: 'ul',
}

const ListItemTopMargin: {[type in NonNullable<ListProps['type']>]: number} = {
  step: 2,
  number: 0,
  bullet: 0,
}

export const List: FunctionComponent<ListProps> = props => (
  <Box as={ListType[props.type]}>
    {props.children.map((item, index) => (
      <Flex key={index} mt={index > 0 ? 4 : undefined} as="li">
        {props.type === 'number' ? (
          <FlexItem width={String(props.children.length).length * 2 + 3} shrink={0}>
            <Text size="s" bold={false}>{index + 1}.</Text>
          </FlexItem>
        ) : props.type === 'bullet' ? (
          <FlexItem width={5} shrink={0}>
            <Text size="s" bold={false}>&#8226;</Text>
          </FlexItem>
        ) : props.type === 'step' ? (
          <Flex direction="column" mr={3} height="auto">
            <FlexItem shrink={0}>
              <Card bg="#F5F5F5" r="50%" height={10} width={10}>
                <Flex align="center" justify="center" height={1} width={1}>
                  <Text size="s" bold>
                    {index + 1}
                  </Text>
                </Flex>
              </Card>
            </FlexItem>
            {index + 1 === props.children.length ? null : (
              <FlexItem height={1} align="center" justify="center">
                <Card bg="#F5F5F5" height="calc(100% + 8px)" width="2px" mt={1} />
              </FlexItem>
            )}
          </Flex>
        ) : null}
        <Box mt={ListItemTopMargin[props.type]}>
          {typeof item === 'string' ? (
            <Paragraph size="s">{item}</Paragraph>
          ) : (
            item
          )}
        </Box>
      </Flex>
    ))}
  </Box>
)
