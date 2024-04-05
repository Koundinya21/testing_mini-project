import React from 'react'

const ScoreContext = React.createContext({
  score: 0,
  updatingScore: () => {},
})

export default ScoreContext
