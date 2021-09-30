import React from 'react'
import { connect } from 'react-redux'

class Results extends React.Component {
  render() {
    return (
      <div style={{ width: '50%'}}>
        {this.props.results.map(result =>
          result.gender === 'male' ? (
          <div style={{ padding: '10px', fontSize: 20, background: '#0090ff', borderBottom: '#FFFFFF 1px solid', cursor: 'pointer' }}>
            <a href={result.url} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              {result.name}
            </a>
          </div>
        ) : (
          <div style={{ padding: '10px', fontSize: 20, background: '#f3657e', borderBottom: '#FFFFFF 1px solid', cursor: 'pointer' }}>
            <a href={result.url} style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              {result.name}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    results: state.results.data
  }
})(Results)
