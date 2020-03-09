import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'
import Icon from '../../general/Icon'
import palette from '../../../themes/palette'

const StyledFieldSet = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  float: left;
`

const StyledRadio = styled.input.attrs({ type: 'radio', name: 'rating' })`
  display: none;

  &:checked ~ label {
    color: ${palette.primary};
  }
`
const StyledLabel = styled.label`
  color: #ddd;
  float: right;
  margin-right: 4px;
  cursor: pointer;
  transition: 0.3s;

/* default value 값을 기준으로 색을 입혀줍니다. */
  ${props =>
    props.defaultValue &&
    css`
      & ~ label {
        color: ${palette.primary};
      }
    `}

  /* disabled 일 경우에는 star에 색을 입히지 않습니다. */
  ${props =>
    !props.disabled &&
    css`
      &:hover ~ label,
      &:hover {
        color: ${palette.primary};
      }
    `}

  &:hover {
    transform: scale(1.1) translateY(1px);
  }
`

type StarProps = {
  count?: number
  disabled?: boolean
  defaultValue?: number
}

function Rate({ count, disabled, defaultValue }: StarProps) {
  /* Exception */
  if (count < defaultValue) throw Error('별의 숫자보다 높은 기본 값을 입력하셨습니다.')

  /* default 값에 따라 색을 입힙니다. UI가 반전되어 있으므로, 값고 반전 시켜줍니다.*/
  const reversedDefaultValue = count - defaultValue

  const renderStars = useCallback(
    () =>
      Array.from(new Array(count)).map((_, idx) => (
        <>
          <StyledRadio id={`star${idx}`} value={idx} disabled={disabled} />
          <StyledLabel
            htmlFor={`star${idx}`}
            disabled={disabled}
            /* default 값에 따라 색을 입힙니다. UI가 반전되어 있으므로, 값고 반전 시켜줍니다.*/
            defaultValue={idx + 1 === reversedDefaultValue}
          >
            <Icon name="star" size={18} />
          </StyledLabel>
        </>
      )),
    [count, disabled, reversedDefaultValue]
  )
  return <StyledFieldSet>{renderStars()}</StyledFieldSet>
}

Rate.defaultProps = {
  count: 5,
  disabled: false,
  defaultValue: 0,
}

export default Rate
