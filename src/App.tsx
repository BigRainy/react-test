import React from 'react'
// import One from 'Components/One'
import { Button } from 'antd'

const App: React.FC = () => {
  return (
    <div>
      {/* <One /> */}
      <Button type="primary" onClick={() => {
        console.log(111)
      }}>Button</Button>
    </div>
  )
}

export default App
