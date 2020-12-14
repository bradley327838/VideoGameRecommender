class GamedeveloperList extends React.Component {

  state = {
    gamedevelopers: []
  }

  findAllGameDevelopers = () =>
    findAllGameDevelopers()
      .then(gamedevelopers => this.setState({gamedevelopers}))

  componentDidMount = () =>
    this.findAllGameDevelopers()

  createGameDeveloper = () => {
    if (localStorage.getItem("Type") != "Moderator") {
      alert("You do not have access to this feature.")
    }
    else {
      createGameDeveloper()
      .then(this.findAllGameDevelopers)
    }
  }


  deleteGameDeveloper = (id) => {
    if (localStorage.getItem("Type") != "Moderator") {
      alert("You do not have access to this feature.")
    }
    else{
      deleteGameDeveloper(id)
      .then(this.findAllGameDevelopers)
    }
  }


  render() {
    return(
      <div>
        <h1>Game Developer List</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Games List</th>
          </tr>
          <tbody>
          {
            this.state.gamedevelopers.map(gamedeveloper =>
              <tr>
                <td>
                  {gamedeveloper.name}
                </td>
                <td>
                  {gamedeveloper.gamedeveloperid}
                </td>
              <td>
                <a href={`gamedevelopergame-list.html?id=${gamedeveloper.gamedeveloperid}`}>
                  Games by {gamedeveloper.name}
                </a>
              </td>
                <td>
                  <button onClick={() => this.deleteGameDeveloper(gamedeveloper.gamedeveloperid)}>
                    Delete
                  </button>
                </td>
                <td>
                  <a href={`gamedeveloper-editor.html?id=${gamedeveloper.gamedeveloperid}`}>
                    Edit
                  </a>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
        <button onClick={this.createGameDeveloper}>
          Create
        </button>
        <p>  </p>
        <a href="../videogames/home.html">
          Back
        </a>
      </div>
    )
  }
}

ReactDOM.render(
  <GamedeveloperList/>, document.getElementById("root"))
