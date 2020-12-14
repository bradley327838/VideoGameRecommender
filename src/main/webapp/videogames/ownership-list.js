class OwnershipList extends React.Component {
  state = {
    owns: []
  }

  findAllOwnerships = () =>
      findAllOwnerships()
      .then(result => {
        let owns = []
        for (let i = 0; i < result.length; i++) {
          if (result[i].gameslibraryid == localStorage.getItem("ID")) {
            findVideoGameById(result[i].videogameid).then((vg) => {
              result[i]["name"] = vg.name
              owns.push(result[i])
              this.setState({owns})
            })
          }
        }
        this.setState({owns})
      })


  componentDidMount = () =>
      this.findAllOwnerships()

  deleteOwnership = (id) =>
      deleteOwnership(id)
      .then(this.findAllOwnerships)

  playOneHour = (id) =>
      playOneHour(id)
      .then(this.findAllOwnerships)

  render() {
    if (localStorage.getItem("Type") != "User") {
      return(
          <div className="container">
            <h3>You do not have access to this feature.</h3>
            <a href={`home.html`}>
              Back
            </a>
          </div>
      )
    }
    return(
        <div>
          <h1>{localStorage.getItem("Name")}'s Games Library</h1>
          <table>
            <tbody>
            <tr>
              <th>Game</th>
              <th>Last Played</th>
              <th>Play Time</th>
            </tr>
            {
              this.state.owns.map(ownership =>
                  <tr>
                    <td>
                      {ownership["name"]}
                    </td>
                    <td>
                      {ownership.lastplayed}
                    </td>
                    <td>
                      {ownership.playtime}
                    </td>
                    <td>
                      <button onClick={() => this.playOneHour(ownership.ownershipid)}>
                        Play For One Hour
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.deleteOwnership(ownership.ownershipid)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <a href={`videogamedetails.html?id=${ownership.videogameid}`}>
                        Video Game Details
                      </a>
                    </td>
                  </tr>
              )
            }
            </tbody>
          </table>
          <a href="../videogames/home.html">
            Back
          </a>
        </div>
    )
  }
}

ReactDOM.render(
    <OwnershipList/>, document.getElementById("root"))