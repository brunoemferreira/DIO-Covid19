import React, { memo } from 'react'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'

function Card({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <LabelStyled>{label}</LabelStyled>
        <ValueStyled>
          {new Intl.NumberFormat('pt-BR', {
            style: 'decimal'
          }).format(value)}</ValueStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)