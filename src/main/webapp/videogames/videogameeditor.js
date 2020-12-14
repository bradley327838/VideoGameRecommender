class Videogameeditor extends React.Component {

  state = {
    videogame: {}
  }

  findVideoGameById = async(id) =>
    findVideoGameById(id)
      .then(videogame => this.setState({videogame}))

  async componentDidMount() {
    const id = window.location.search.split("=")[1]
    this.findVideoGameById(id)
  }

  saveVideoGame = () =>
    renameVideoGame(this.state.videogame)

  saveVideoGameGameDeveloperID = () =>
      newGameDeveloperIDVideoGame(this.state.videogame)

  saveVideoGameDate = () =>
    newDateVideoGame(this.state.videogame)

  saveVideoGamePrice = () =>
      newPriceVideoGame(this.state.videogame)

  saveVideoGameDescription = () =>
      newDescriptionVideoGame(this.state.videogame)



  render() {
    if (localStorage.getItem("Type") != "Moderator"
        && !(localStorage.getItem("Type") == "Game-Developer"
            && localStorage.getItem("ID") == this.state.videogame.gameDeveloperID)) {
      return(
          <div className="container">
            <h3>You do not have access to this feature.</h3>
            <a href={`home.html`}>
              Back
            </a>
          </div>
      )
    }
    else if ((localStorage.getItem("Type") == "Game-Developer"
        && localStorage.getItem("ID") == this.state.videogame.gameDeveloperID)) {
      return(
          <div className="container">
            <h1>VideoGame Editor {this.state.videogame.name}</h1>
            <h3>Name</h3>
            <input
                onChange={(event) => this.setState({
                  videogame: {
                    ...this.state.videogame,
                    name: event.target.value
                  }
                })}
                className="form-control"
                value={this.state.videogame.name}/>
            <button onClick={this.saveVideoGame}>
              Save
            </button>
            <h3>Date</h3>
            <input
                onChange={(event) => this.setState({
                  videogame: {
                    ...this.state.videogame,
                    releaseDate: event.target.value
                  }
                })}
                className="form-control"
                value={this.state.videogame.releaseDate}/>
            <button onClick={this.saveVideoGameDate}>
              Save
            </button>
            <h3>Price</h3>
            <input
                onChange={(event) => this.setState({
                  videogame: {
                    ...this.state.videogame,
                    price: event.target.value
                  }
                })}
                className="form-control"
                value={this.state.videogame.price}/>
            <button onClick={this.saveVideoGamePrice}>
              Save
            </button>
            <h3>Description</h3>
            <input
                onChange={(event) => this.setState({
                  videogame: {
                    ...this.state.videogame,
                    description: event.target.value
                  }
                })}
                className="form-control"
                value={this.state.videogame.description}/>
            <button onClick={this.saveVideoGameDescription}>
              Save
            </button>
            <p>   </p>
            <a href={`videogamedetails.html?id=${this.state.videogame.videoGameID}`}>
              Done
            </a>
          </div>
      )
    }
    return(
      <div className="container">
        <h1>VideoGame Editor {this.state.videogame.name}</h1>
        <h3>Name</h3>
        <input
          onChange={(event) => this.setState({
            videogame: {
              ...this.state.videogame,
              name: event.target.value
            }
          })}
          className="form-control"
          value={this.state.videogame.name}/>
        <button onClick={this.saveVideoGame}>
          Save
        </button>
        <h3>Game Developer ID</h3>
        <input
            onChange={(event) => this.setState({
              videogame: {
                ...this.state.videogame,
                gameDeveloperID: event.target.value
              }
            })}
            className="form-control"
            value={this.state.videogame.gameDeveloperID}/>
        <button onClick={this.saveVideoGameGameDeveloperID}>
          Save
        </button>
        <h3>Date</h3>
        <input
            onChange={(event) => this.setState({
              videogame: {
                ...this.state.videogame,
                releaseDate: event.target.value
              }
            })}
            className="form-control"
            value={this.state.videogame.releaseDate}/>
          <button onClick={this.saveVideoGameDate}>
            Save
          </button>
        <h3>Price</h3>
        <input
            onChange={(event) => this.setState({
              videogame: {
                ...this.state.videogame,
                price: event.target.value
              }
            })}
            className="form-control"
            value={this.state.videogame.price}/>
        <button onClick={this.saveVideoGamePrice}>
          Save
        </button>
        <h3>Description</h3>
        <input
            onChange={(event) => this.setState({
              videogame: {
                ...this.state.videogame,
                description: event.target.value
              }
            })}
            className="form-control"
            value={this.state.videogame.description}/>
        <button onClick={this.saveVideoGameDescription}>
          Save
        </button>
        <p>   </p>
          <a href={`videogamedetails.html?id=${this.state.videogame.videoGameID}`}>
            Done
          </a>
      </div>
    )
  }
}

ReactDOM.render(
  <Videogameeditor/>, document.getElementById("root"))
