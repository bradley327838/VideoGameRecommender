class VideogameNewreview extends React.Component {

  state = {
    videogame: {}
  }

  findVideoGameById = async(id) =>
      findVideoGameById(id)
      .then(videogame => this.setState({videogame}))

  async componentDidMount() {
    const id = window.location.search.split("=")[1]
    this.findVideoGameById(id).then((value) => {
      let videogame = this.state.videogame
      videogame["review"] = {}
      videogame["review"].reviewdescription = "New Review"
      videogame["review"].rating = 0
      this.setState(videogame)
    })
  }

  setReview = () => {
    let videogame = this.state.videogame
    createReviewWithIDS(localStorage.getItem("ID"),
        this.state.videogame.videoGameID, videogame["review"].reviewdescription,
        videogame["review"].rating)
  }

  render() {
    if (localStorage.getItem("Type") != "User") {
      return(
          <div className="container">
          <h3>You do not have access to this feature.</h3>
      <a href={`videogamedetails.html?id=${this.state.videogame.videoGameID}`}>
        Back
      </a>
          </div>
      )
    }
    if (this.state.videogame["review"] != undefined) {
      return(
          <div className="container">
            <h1>New Review For {this.state.videogame.name}</h1>
            <h3>Description</h3>
            <input
                onChange={(event) => {
                  let videogame = this.state.videogame
                  videogame["review"].reviewdescription = event.target.value
                  this.setState(videogame)
                }}
                className="form-control"
                value={this.state.videogame["review"].reviewdescription}/>
            <h3>Rating</h3>
            <input
                onChange={(event) => {
                  let videogame = this.state.videogame
                  videogame["review"].rating = event.target.value
                  this.setState(videogame)
                }}
                className="form-control"
                value={this.state.videogame["review"].rating}/>
            <button onClick={this.setReview}>
              Save
            </button>
            <p>   </p>
            <a href={`home.html`}>
              Back
            </a>
          </div>
      )
    }
    else {
      return (<p>PCC</p>)
    }
  }
}

ReactDOM.render(
    <VideogameNewreview/>, document.getElementById("root"))
