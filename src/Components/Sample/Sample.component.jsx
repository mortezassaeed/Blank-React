import React, { Component } from "react";
import { connect } from "react-redux";
import { setSample } from "../../Redux/sample/sample.action";
import {
  setPersistData,
  reSetPersistData
} from "../../Redux/sample/samplePersist.action";

class Sample extends Component {
  constructor() {
    super();
    this.state = {
      sample: { id: 0, name: "" },
      persistData: { idP: 0, count: 0 }
    };
  }
  onSubmit = e => {
    console.log(this.state.sample.name);
    console.log(this.state.sample.id);
    e.preventDefault();
    this.props.setSample({
      name: this.state.sample.name,
      id: parseInt(this.state.sample.id)
    });
  };

  onSubmitP = e => {
    e.preventDefault();
    this.props.setPersistData({
      count: parseInt(this.state.persistData.idP),
      id: parseInt(this.state.persistData.count)
    });
  };

  onChange = e => {
    this.setState({
      ...this.state,
      sample: {
        ...this.state.sample,
        [e.target.name]: e.target.value
      }
    });
  };

  onChangeP = e => {
    this.setState({
      ...this.state,
      persistData: {
        ...this.state.persistData,
        [e.target.name]: e.target.value
      }
    });
  };

  onClickReSetPersistData = e => {
    e.preventDefault();
    this.props.reSetPersistData();
  };

  render() {
    const { samples } = this.props;
    const { persistData } = this.props;
    const { name, id } = this.state.sample;
    const { count, idP } = this.state.persistData;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <label>id:</label>
          <input name="id" value={id} onChange={this.onChange} /> <br />
          <label htmlFor="name">name:</label>
          <input name="name" value={name} onChange={this.onChange} />
          <button>add</button>
        </form>
        <div>
          <ul>
            {samples.map(item => (
              <li key={item.id}>
                {item.id} {item.name}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={this.onSubmitP}>
          <label>id:</label>
          <input name="idP" value={idP} onChange={this.onChangeP} /> <br />
          <label htmlFor="count">count:</label>
          <input name="count" value={count} onChange={this.onChangeP} />
          <button>add</button>
        </form>
        <button onClick={this.onClickReSetPersistData}>resede</button>
        {persistData.length === 0 ? (
          " "
        ) : (
          <div>
            <ul>
              {persistData.map(item => (
                <li key={item.id}>
                  {item.id} {item.count}
                </li>
              ))}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  samples: state.sample.samples,
  persistData: state.samplePersist.persistData
});

const mapDispatchToProp = dispatch => ({
  setSample: sample => dispatch(setSample(sample)),
  setPersistData: persistData => dispatch(setPersistData(persistData)),
  reSetPersistData: () => dispatch(reSetPersistData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Sample);
