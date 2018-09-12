import * as React from 'react'
import { Slider } from '@317hu'
import { Slider as SliderNext } from '@317hu/next'

class Component extends React.Component<{}, {}> {
  formatTooltip = () => { }
  onChange = (value) => { }
  render() {
    return (
      <div>
        <Slider className="className" style={{ width: 100 }} />
        <Slider min="1" max="10" step="1" value={[1, 2]} />
        <Slider min={1} max={10} step={1} value={1} showInput={true} showInputControls={true} showTooltip={true} showStops={true} disabled={true} range={false} vertical={false} height="100" formatTooltip={this.formatTooltip} onChange={this.onChange} />

        <SliderNext className="className" style={{ width: 100 }} />
        <SliderNext min="1" max="10" step="1" value={[1, 2]} />
        <SliderNext min={1} max={10} step={1} value={1} showInput={true} showInputControls={true} showTooltip={true} showStops={true} disabled={true} range={false} vertical={false} height="100" formatTooltip={this.formatTooltip} onChange={this.onChange} />
      </div>
    )
  }
}
