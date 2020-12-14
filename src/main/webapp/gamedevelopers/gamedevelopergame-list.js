class GamedevelopergameList extends React.Component {

  state = {
    games: {}
  }


  findAllVideoGames = async(id) =>
      findAllVideoGames()
      .then(videogames => {
        let games = {}
        games["list"] = videogames
        games["id"] = id
        this.setState({games})
      })

  async componentDidMount() {
    const id = window.location.search.split("=")[1]
    this.findAllVideoGames(id).then((value) => {
      if (this.state.games["id"] != undefined) {
        findGameDeveloper(this.state.games["id"]).then((num) => {
          let games = this.state.games
          let newList = []
          for (let i = 0; i < games["list"].length; i++) {
            if (games["list"][i].gameDeveloperID == games["id"]) {
              newList.push(games["list"][i])
            }
          }
          games["gamedevelopername"] = num
          games["list"] = newList
          this.setState(games)
        })
      }
    })
  }

  render() {
    if (this.state.games["list"] != undefined) {
      return(
          <div>
            <h1>Video Games Made by {this.state.games["gamedevelopername"]}</h1>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
              {
                this.state.games["list"].map(videogame =>
                    <tr>
                      <td>
                        {videogame.name}
                      </td>
                      <td>
                        {videogame.price}
                      </td>
                      <td>
                        <a href={`../videogames/videogamedetails.html?id=${videogame.videoGameID}`}>
                          Details
                        </a>
                      </td>
                    </tr>
                )
              }
              </tbody>
            </table>
            <p>  </p>
            <a href="../videogames/home.html">
              Back
            </a>
          </div>
      )
    }
    else {
      return <p>PCC</p>
    }
  }
}

ReactDOM.render(
    <GamedevelopergameList/>, document.getElementById("root"))
