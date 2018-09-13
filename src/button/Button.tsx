/* @flow */

import * as React from 'react';
import * as PropTypes from 'prop-types';
// import { Component, PropTypes } from '../../libs';

export interface ButtonProps {
  className?: string;
  style?: any;

  loading?: boolean;
  onClick?: any;
}

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    type: 'default',
    nativeType: 'button',
    loading: false,
    disabled: false,
    plain: false
  };
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    nativeType: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    plain: PropTypes.bool
  };
  // constructor(props: ButtonProps) {
  //   super(props);
  // }
  onClick(e: any): void {
    if (!this.props.loading && this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render() {
    return (
      <button>
        <span>{this.props.children}</span>
      </button>
    )
  }
}
