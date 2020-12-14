class Videogamedetails extends React.Component {
  state = {
    videogame: {"reviews": []}
  }

  findVideoGameById = async(id) =>
      findVideoGameById(id)
      .then(videogame => {
        videogame["reviews"] = []
        this.setState({videogame})
      })


  async componentDidMount() {
    const id = window.location.search.split("=")[1]

    this.findVideoGameById(id).then((value) => {
      if (this.state.videogame.gameDeveloperID != undefined) {
        findGameDeveloper(this.state.videogame.gameDeveloperID).then((num) => {
          let newGame = this.state.videogame
          newGame["gamedevelopername"] = num
          newGame["reviews"] = []
          findAllReviews().then((reviews) => {
            for (let i = 0; i < reviews.length; i++)
              if (reviews[i].videogameid == this.state.videogame.videoGameID) {
                findUserById(reviews[i].userid).then((user) => {
                  let newReview = {}
                  newReview["User"] = user.username
                  newReview["Description"] = reviews[i].reviewdescription
                  newReview["Rating"] = reviews[i].rating
                  newGame["reviews"].push(newReview)
                  this.setState(newGame)
                })
            }
            this.setState(newGame)
          })
          this.setState(newGame)
        })
      }
      else {
        let newGame = this.state.videogame
        newGame["reviews"] = []
        findAllReviews().then((reviews) => {
          for (let i = 0; i < reviews.length; i++)
            if (reviews[i].videogameid == this.state.videogame.videoGameID) {
              findUserById(reviews[i].userid).then((user) => {
                let newReview = {}
                newReview["User"] = user.username
                newReview["Description"] = reviews[i].reviewdescription
                newReview["Rating"] = reviews[i].rating
                newGame["reviews"].push(newReview)
                this.setState(newGame)
              })
            }
          this.setState(newGame)
        })
        this.setState(newGame)
      }
    })
  }

  render() {
    if (this.state.videogame["reviews"] != undefined) {
      return(
          <div className="container">
            <h1>Details for {this.state.videogame.name}</h1>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Game Developer</th>
                <th>Release Date</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>{this.state.videogame.name}</td>
                <td>{this.state.videogame.videoGameID}</td>
                <td id = "dev"><a href={`../gamedevelopers/gamedevelopergame-list.html?id=${this.state.videogame.gameDeveloperID}`}>
                  {this.state.videogame["gamedevelopername"]}
                </a></td>
                <td>{this.state.videogame.releaseDate}</td>
                <td>{this.state.videogame.price}</td>
                <td>{this.state.videogame.description}</td>
              </tr>
              </tbody>
            </table>
            <a href={`videogame-editor.html?id=${this.state.videogame.videoGameID}`}>
              Edit
            </a>

            <h2>Reviews</h2>
            <table>
              <tbody>
              <tr>
                <th>User</th>
                <th>Description</th>
                <th>Rating</th>
              </tr>
              {
                this.state.videogame["reviews"].map(review =>
                    <tr>
                      <td>
                        {review["User"]}
                      </td>
                      <td>
                        {review["Description"]}
                      </td>
                      <td>
                        {review["Rating"]} stars
                      </td>
                    </tr>
                )
              }
              </tbody>
            </table>

            <a href={`videogame-newreview.html?id=${this.state.videogame.videoGameID}`}>
              Write a review
            </a>
            <br/>
            <br/>
            <a href="home.html">
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
    <Videogamedetails/>, document.getElementById("root"))