import React, {FunctionComponent} from 'react'

import {PaginationControl, Card, IconWrapper, Box, Block} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Text} from '../typography'
import {PaginationLink} from './PaginationLink'

export interface BlockPaginationProps {
  total: number
  active: number
  count?: number
  href?: (page: number) => string
  onChange?: (index: number) => void
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
}

export const BlockPagination: FunctionComponent<BlockPaginationProps> = ({
  total,
  count = 3,
  active,
  href,
  onChange,
  onClick,
}) => (
  <Box display="inline-block">
    <Block>
      <PaginationControl
        total={total}
        count={count}
        active={active}
        href={href}
        onChange={onChange}
        onClick={onClick}
        children={renderProps => (
          <Card
            bg="#fff"
            height={12}
            display="inline-flex"
            r={10}
            overflow="hidden"
          >
            <PaginationLink
              pageNumber={renderProps.previousPage}
              disabled={renderProps.pages.includes(1)}
              height={12}
              width={12}
              boxWidth={5}
              boxHeight={5}
              s="1px 0 0 #e6e6e6"
              href={href}
              onClick={renderProps.onPageClick}
              children={({disabled}) => (
                <IconWrapper color={disabled ? '#ccc' : '#000'}>
                  <Icon name="angle-small-left" />
                </IconWrapper>
              )}
            />
            {renderProps.pages.map(pageNumber => (
              <PaginationLink
                key={pageNumber}
                pageNumber={pageNumber}
                height={12}
                width={12}
                s="1px 0 0 #e6e6e6"
                href={href}
                onClick={renderProps.onPageClick}
                children={() => (
                  <Text
                    bold={false}
                    size="m"
                    color={
                      renderProps.currentPage === pageNumber
                        ? 'warning'
                        : 'default'
                    }
                  >
                    {pageNumber}
                  </Text>
                )}
              />
            ))}
            <PaginationLink
              pageNumber={renderProps.nextPage}
              disabled={renderProps.pages.includes(renderProps.totalPages)}
              height={12}
              width={12}
              boxWidth={5}
              boxHeight={5}
              s="1px 0 0 #e6e6e6"
              href={href}
              onClick={renderProps.onPageClick}
              children={({disabled}) => (
                <IconWrapper color={disabled ? '#ccc' : '#000'}>
                  <Icon name="angle-small-right" />
                </IconWrapper>
              )}
            />
          </Card>
        )}
      />
    </Block>
  </Box>
)

BlockPagination.defaultProps = {
  count: 3,
}
