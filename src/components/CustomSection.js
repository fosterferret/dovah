/* eslint-disable react/prop-types */
import React from "react"
import convertStyle from "../utils/convertStyle"
import getWindowHeight from "../utils/getWindowHeight"

export default class CustomSection extends React.Component {
 
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { style: {} };
    this.updateStyle = this.updateStyle.bind(this);
  }

  // On mount and window resize converts rvh values to px (if there are any).
  // Also, adds `height: 100rvh` if height is not specified at all
  updateStyle () {
    const styleToConvert = getWindowHeight()
    const convertedStyle = convertStyle(styleToConvert);
    this.setState({ style: convertedStyle });
  }

  componentDidMount() {
    this.updateStyle();
    window.addEventListener('resize', this.updateStyle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStyle);
  }

  render() {
    const { as: Element = 'section', ...props } = this.props;

    return <Element {...props} style={this.state.style} />;
  }
}
