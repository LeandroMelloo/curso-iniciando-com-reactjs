import React from 'react';

export default class Comentario extends React.Component {
  render() {
    return (
      <p>{this.props.texto}</p>
    )
  }
}