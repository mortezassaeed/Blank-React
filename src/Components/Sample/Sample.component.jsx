import React, { Component } from "react";
import { connect } from "react-redux";
import { setSample } from "../../Redux/sample/sample.action";
import { runInThisContext } from "vm";

class Sample extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      name: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.setSample({
      name: this.state.name,
      id: parseInt(this.state.id)
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { samples } = this.props;
    const { name, id } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <lable>id:</lable>
          <input name="id" value={id} onChange={this.onChange} /> <br />
          <label htmlFor="name">name:</label>
          <input name="name" value={name} onChange={this.onChange} />
          <button>add</button>
        </form>
        <div>
          <ul>
            {samples.map(item => (
              <li>
                {item.id} {item.name}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  samples: state.sample.samples
});

const mapDispatchToProp = dispatch => ({
  setSample: sample => dispatch(setSample(sample))
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Sample);
