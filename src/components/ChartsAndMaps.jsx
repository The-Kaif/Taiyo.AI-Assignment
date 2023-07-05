import React from 'react'
import LineGraph from './LineGraph'
import CovidMap from './CovidMap'
// In this component i call linegraph and covid map componnet
function ChartsAndMaps() {
  return (
    <div>
      <LineGraph/>
      <CovidMap/>
    </div>
  )
}

export default ChartsAndMaps