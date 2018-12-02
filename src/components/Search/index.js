import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="form-autocomplete" style={{ paddingTop: 50 }}>
        <div className="form-autocomplete-input form-input">
          <input className="form-input" type="text" placeholder="typing here" />
        </div>
      </div>
    );
  }
}
