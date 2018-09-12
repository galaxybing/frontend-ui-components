import * as React from 'react'
import { Loading } from '@317hu'
import { Loading as LoadingNext } from '@317hu/next'

class Component extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Loading className="className" style={{ width: 100 }} />
        <Loading />
        <Loading fullscreen={true} />
        <Loading text="text" />
        <Loading loading={false} />

        <LoadingNext className="className" style={{ width: 100 }} />
        <LoadingNext />
        <LoadingNext fullscreen={true} />
        <LoadingNext text="text" />
        <LoadingNext loading={false} />
      </div>
    )
  }
}
