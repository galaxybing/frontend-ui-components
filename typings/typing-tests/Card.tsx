import * as React from 'react'
import { Card, Button } from '@317hu'
import { Card as CardNext } from '@317hu/next'

class Component extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Card className="className" style={{ width: 100 }} />
        <Card header="header" />
        <Card header={
          <div>
            <Button>按钮</Button>
          </div>
        } />
        <Card bodyStyle={{ padding: '50px' }} />

        <CardNext className="className" style={{ width: 100 }} />
        <CardNext header="header" />
        <CardNext header={
          <div>
            <Button>按钮</Button>
          </div>
        } />
        <CardNext bodyStyle={{ padding: '50px' }} />
      </div>
    )
  }
}
