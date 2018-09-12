import * as React from 'react'
import { ColorPicker } from '@317hu'
import { ColorPicker as ColorPickerNext } from '@317hu/next'

class Component extends React.Component<{}, {}> {
  format: 'hsl' | 'hsv' | 'hex' | 'rgb'
  onChange = (color) => { }
  render() {
    return (
      <div>
        <ColorPicker className="className" style={{ width: 100 }} />
        <ColorPicker value="#ffffff" showAlpha={true} colorFormat={this.format} onChange={this.onChange} />

        <ColorPickerNext className="className" style={{ width: 100 }} />
        <ColorPickerNext value="#ffffff" showAlpha={true} colorFormat={this.format} onChange={this.onChange} />
      </div>
    )
  }
}
