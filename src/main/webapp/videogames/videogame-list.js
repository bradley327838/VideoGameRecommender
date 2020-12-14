class VideogameList extends React.Component {
  state = {
    videogames: []
  }

  findAllVideoGames = () =>
      findAllVideoGames()
      .then(videogames => this.setState({videogames}))

  componentDidMount = () =>
      this.findAllVideoGames()

  createVideoGame = () => {
    if (localStorage.getItem("Type") == "User") {
      alert("You do not have access to this feature!")
    }
    else if (localStorage.getItem("Type") == "Game-Developer") {
      createVideoGameWithID(localStorage.getItem("ID"))
      .then(this.findAllVideoGames)
    }
    else{
      createVideoGame()
      .then(this.findAllVideoGames)
    }
  }


  deleteVideoGame = (id) => {
    findVideoGameById(id).then((vg) => {
      findGameDeveloper(vg.gameDeveloperID).then((dev) => {
        if (localStorage.getItem("Type") != "Moderator"
            && !(localStorage.getItem("Type") == "Game-Developer"
                && localStorage.getItem("Name") == dev)) {
          alert("You do not have access to this feature!")
        }
        else {
          deleteVideoGame(id)
          .then(this.findAllVideoGames)
        }
      })
    })

  }


  createOwnership(vid) {
    if (localStorage.getItem("Type") != "User") {
      alert("You do not have access to this feature!")
    }
    else {
      findAllOwnerships().then((ownerships) => {
        let notOwned = true
        for (let i = 0; i < ownerships.length; i++) {
          if (ownerships[i].gameslibraryid == localStorage.getItem("ID")
              && ownerships[i].videogameid == vid) {
            alert("You already own this game")
            notOwned = false
          }
        }
        if (notOwned) {
          findAllGamesLibrary().then((gl) => {
            let hasGamesLibrary = false
            for (let i = 0; i < gl.length; i++) {
              if (gl[i].userid == localStorage.getItem("ID")) {
                hasGamesLibrary = true
              }
            }
            if (!hasGamesLibrary) {
              createGamesLibrary(localStorage.getItem("ID")).then(() => {
                findUserById(localStorage.getItem("ID")).then((user) => {
                  findVideoGameById(vid).then((vg) => {
                    if (user.accountbalance < vg.price) {
                      alert("Not enough funds in account balance!")
                    }
                    else {
                      subtract(vg.price, user)
                      createOwnership(localStorage.getItem("ID"), vid)
                    }
                        })
                  })


              })
            }
            else {
              findUserById(localStorage.getItem("ID")).then((user) => {
                findVideoGameById(vid).then((vg) => {
                  if (user.accountbalance < vg.price) {
                    alert("Not enough funds in account balance!")
                  }
                  else {
                    subtract(vg.price, user)
                    createOwnership(localStorage.getItem("ID"), vid)
                  }
                })
              })
            }
          })
        }
      })
    }
  }

  render() {
    return(
        <div>
          <h1>Video Game List</h1>
          <table>
            <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {
              this.state.videogames.map(videogame =>
                  <tr>
                    <td>
                      {videogame.name}
                    </td>
                    <td>
                      {videogame.price}
                    </td>
                    <td>
                      <button onClick={() => this.deleteVideoGame(videogame.videoGameID)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <a href={`videogamedetails.html?id=${videogame.videoGameID}`}>
                        Details
                      </a>
                    </td>
                    <td>
                      <button onMouseUp={() => {this.createOwnership(videogame.videoGameID)}}>
                        Add to Games Library
                      </button>
                    </td>
                  </tr>
              )
            }
            </tbody>
          </table>
          <button onClick={this.createVideoGame}>
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
    <VideogameList/>, document.getElementById("root"))