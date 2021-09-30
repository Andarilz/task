import React from 'react'
import { setResults } from '../../actions/results'
import { connect } from 'react-redux'

class Searchinput extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.value)

    fetch('https://swapi.dev/api/people/?search=' + this.state.value)
      .then(function (response) {
        return response.json()
      })
      .then((data) => {
        this.props.setResults(data.results)
      });
  }

  render() {
    return (
      <input onChange={(e) => {
        this.setState({ value: e.target.value })
      }}
      style={{ width: '50%', height: 40, fontSize: 20, padding: '5px 10px', boxSizing: 'border-box' }}/>
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    setResults: payload => dispatch(setResults(payload))
  }
})(Searchinput)
