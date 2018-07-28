import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './TextArea.css';

class TextArea extends PureComponent {
  state = { value: this.props.value };

  onKeyPress = event => {
    const { onEnter } = this.props;

    if (event.which === 13) {
      event.preventDefault();
      onEnter();
    }
  };

  change = ({ target }) => {
    const value = { target };
    this.setState({ value });

    this.props.onChange && this.props.onChange(value);
  };

  clear = () => {
    this.setValue(null);
  };

  focus = () => {
    this.textarea.focus();
  };

  blur = () => {
    this.textarea.blur();
  };

  render() {
    const
      {
        autoFocus,
        defaultValue,
        placeholder,
      } = this.props,
      { value } = this.state;

    return (
      <textarea
        ref={e => (this.textarea = e)}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onInput={this.change}
        className="textarea"
        autoFocus={autoFocus}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}

TextArea.propTypes = {
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
};

export default TextArea;
