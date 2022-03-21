import React, { ChangeEvent, memo, VFC } from 'react'
import { styled } from '@linaria/react'
import cn from 'classnames'

type Props = {
  title: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  .label__check {
    width: 12px;
    height: 12px;
    border: 2px solid #c8c7c8;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: white;
    border-radius: 4px;
    &::before {
      content: '';
      display: inline-block;
      transform: rotate(45deg);
      margin-bottom: 3px;
      height: 60%;
      width: 30%;
      border-bottom: 2px solid white;
      border-right: 2px solid white;
    }
    &::after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
    }
    &--checked {
      background-color: #4880c8;
      border-color: #4880c8;
      &::after {
        background-color: #4880c8;
        left: 100%;
        transition: 0.2s ease-in-out left;
      }
    }
  }
  .label__input {
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
  }
`

const Checkbox: VFC<Props> = ({ name, title, onChange }) => {
  const [isChecked, setIsChecked] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target

    setIsChecked(checked)
    onChange(e)
  }

  return (
    <StyledLabel htmlFor={name}>
      <input
        className="label__input"
        type="checkbox"
        id={name}
        name={name}
        onChange={handleChange}
      />
      <span
        className={cn('label__check', {
          'label__check--checked': isChecked,
        })}
      />
      <span className="label__text">{title}</span>
    </StyledLabel>
  )
}

export default memo(Checkbox)
