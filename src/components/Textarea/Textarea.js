import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

class Textarea extends PureComponent {
  state = { value: this.props.value };

  onKeyPress = event => {
    const { onEnter } = this.props;

    if (event.which === 13) {
      event.preventDefault();
      onEnter(event);
    }
  };

  change = ({ target }) => {
    const { value } = target;
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
        className = "",
      } = this.props,
      { value } = this.state;

    return (
      <textarea
        ref={e => (this.textarea = e)}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onInput={this.change}
        className={`textarea ${className}`}
        autoFocus={autoFocus}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}

Textarea.propTypes = {
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
};

export default Textarea;
