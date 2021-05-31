import React from "react";

import Comentario from "./Comentario";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comentarios: [],
      novoComentarioTexto: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleSubmit(event) {
    this.setState({
      comentarios: [
        ...this.state.comentarios,
        { texto: this.state.novoComentarioTexto }
      ]
    })

    this.setState({ novoComentarioTexto: '' })

    event.preventDefault();
  }

  handleTextChange(event) {
    this.setState({ novoComentarioTexto: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.novoComentarioTexto}
            onChange={this.handleTextChange}
          />
          <button type="submit">Comentar</button>
        </form>
        { this.state.comentarios.map((comentario, index) => {
          return <Comentario key={index} texto={comentario.texto} />
        })}
      </div>
    )
  }
}
