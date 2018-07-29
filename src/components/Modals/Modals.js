import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';
import SignIn from './SignIn';
import { close } from "../../actions/modals";
import "./Modals.css";

class Modals extends Component {

  handleClick = event => {
    if (event.target.contains(this.modal)) {
      this.props.close();
    }
  };

  returnPopup = (name) => {
    let block;

    switch (name) {
      case "sign_in":
        block = <SignIn />;
        break;

      default:
        block = <SignIn />;
    }

    return block;
  };

  render() {
    let { name, isVisible } = this.props;

    return (
      <div>
        {
          isVisible ? (
            <div
              className="modals"
              onClick={this.handleClick}
            >
              <div
                ref={elem => (this.modal = elem)}
                className="modals_container"
              >
                {this.returnPopup(name)}
              </div>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    name: state.modals.name,
    isVisible: state.modals.isVisible,
  }),
  dispatch => ({
    close: bindActionCreators(close, dispatch)
  }),
)(Modals);
