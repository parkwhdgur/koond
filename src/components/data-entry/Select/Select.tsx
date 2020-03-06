import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'
import Icon from '../../general/Icon'
const SelectWrapper = styled.span`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 20px;
  border: 1px solid ${palette.outline};
  cursor: pointer;
  padding: 6px 10px;
  line-height: 1.5;
  color: ${palette.typography.grayscale[2]};

  transition: 0.3s;

  &:hover {
    border-color: ${palette.primary};
  }
`

const StyledArrowWrapper = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2px;
  transition: 0.3s;
  top: 50%;
  margin-right: 10px;
  color: ${palette.typography.grayscale[4]};

  transform: ${props => (props.checked ? 'translateY(-50%) rotate(270deg)' : 'translateY(-50%) rotate(90deg)')};
`

const StyledOptionWrapper = styled.div`
  position: absolute;
  user-select: none;
  top: 35px;
  left: 0;
  height: ${({ checked }) => (checked ? '100px' : 0)};
  opacity: ${({ checked }) => (checked ? 1 : 0)};
  width: 100%;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow-y: auto;
  transition: 0.2s;
  padding: 0;

  list-style: none;
  option {
    padding: 7px 10px;
    transition: background 0.2s;
    cursor: pointer;
    box-sizing: border-box;
    &:checked {
      background: ${palette.shadow};
      font-weight: bold;
    }
    &:not(:checked):hover {
      background: rgba(0, 0, 0, 0.02);
    }
  }
`

const StyledCancelWrapper = styled.span`
  display: flex;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 10px;
  background: red;
  border-radius: 50%;
  padding: 4px;
  box-sizing: border-box;
  background: ${palette.grayscale[4]};
  color: ${palette.white};
  transition: 0.3s;

  &:hover {
    background: ${palette.grayscale[3]};
  }
`

function Select() {
  const [toggle, setToggle] = useState(false)
  const [currentOption, setCurrentOption] = useState('')

  const handleCheck = useCallback(e => {
    setToggle(prevToggle => !prevToggle)
  }, [])

  const handleCancel = useCallback(e => {
    e.stopPropagation()
    setCurrentOption('')
  }, [])
  const handleClick = useCallback(e => {
    setCurrentOption(e.target.value)
  }, [])
  return (
    <>
      <>
        <SelectWrapper onClick={handleCheck}>
          {currentOption}
          <StyledOptionWrapper checked={toggle}>
            <option value="Jack" onClick={handleClick} selected={currentOption === 'Jack'}>
              Jack
            </option>
            <option value="Lucy" onClick={handleClick} selected={currentOption === 'Lucy'}>
              Lucy
            </option>
            <option value="Parkoon" onClick={handleClick} selected={currentOption === 'Parkoon'}>
              Parkoon
            </option>
            <option value="Hello" onClick={handleClick} selected={currentOption === 'Hello'}>
              Helo
            </option>
            <option value="Jimi" onClick={handleClick} selected={currentOption === 'Jimi'}>
              Jimi
            </option>
            <option value="Jong" onClick={handleClick} selected={currentOption === 'Jong'}>
              Jong
            </option>
          </StyledOptionWrapper>

          {currentOption ? (
            <StyledCancelWrapper onClick={handleCancel}>
              <Icon name="cancel" size={6} />
            </StyledCancelWrapper>
          ) : (
            <StyledArrowWrapper checked={toggle}>
              <Icon name="arrow-left" size={12} />
            </StyledArrowWrapper>
          )}
        </SelectWrapper>
      </>
    </>
  )
}

export default Select
