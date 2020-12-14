class GamedeveloperEditor extends React.Component {

  state = {
    gamedeveloper: {}
  }

  findGameDeveloperById = (id) =>
    findGameDeveloperById(id)
      .then(gamedeveloper => this.setState({gamedeveloper}))

  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findGameDeveloperById(id)
  }

  saveGameDeveloper = () =>
    renameGameDeveloper(this.state.gamedeveloper)

  render() {
    if (localStorage.getItem("Type") != "Moderator"
        && !(localStorage.getItem("Type") == "Game-Developer"
            && localStorage.getItem("ID") == window.location.search.split("=")[1])) {
      return(
          <div className="container">
            <h3>You do not have access to this feature.</h3>
            <a href={`../videogames/home.html`}>
              Back
            </a>
          </div>
      )
    }
    return(
      <div className="container">
        <h1>Editor For {this.state.gamedeveloper.name}</h1>
        <input className="form-control" readOnly={true} value={this.state.gamedeveloper.gamedeveloperid}/>
        <input
          onChange={(event) => this.setState({
            gamedeveloper: {
              ...this.state.gamedeveloper,
              name: event.target.value
            }
          })}
          className="form-control"
          value={this.state.gamedeveloper.name}/>
          <button onClick={this.saveGameDeveloper}>
            Save
          </button>
          <a href="gamedeveloper-list.html">
            Done
          </a>
      </div>
    )
  }
}

ReactDOM.render(
  <GamedeveloperEditor/>, document.getElementById("root"))
