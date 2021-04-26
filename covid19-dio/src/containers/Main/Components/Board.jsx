import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const casosHoje = todayCases === 0 ? '0' : todayCases;
  const mortosHJ = todayDeaths === 0 ? '0' : todayDeaths;

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card value={getValue(casosHoje)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(mortosHJ)} label="Óbitos hoje" color="#F7B829" />
      </Grid>

      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de Óbitos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)