import React, { memo, useEffect, useState, useCallback } from 'react';
import Api from '../../api';

import { Container } from './style';

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('brazil');

  const getCovidData = useCallback(() => {
    Api.getCountry(country)
      .then(data => setData(data))
  })

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  return (
    <Container>
      <div className="mb-2">

      </div>
    </Container>
  )
}

export default memo(Main);