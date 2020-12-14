class UserEditor extends React.Component {

  state = {
    user: {}
  }

  findUserById = (id) =>
    findUserById(id)
      .then(user => this.setState({user}))

  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findUserById(id)
  }

  saveUser = () =>
    renameUser(this.state.user)

  saveUserPassword = () =>
      renameUserPassword(this.state.user)

  saveUserPhone = () =>
      renameUserPhone(this.state.user)

  saveUserEmail = () =>
      renameUserEmail(this.state.user)

  saveUserBalance = () =>
      renameUserBalance(this.state.user)

  render() {
    if (localStorage.getItem("Type") != "Moderator"
        && !(localStorage.getItem("Type") == "User"
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
        <h1>User Editor {this.state.user.username}</h1>
        <input className="form-control" readOnly={true} value={this.state.user.userid}/>
        <input
          onChange={(event) => this.setState({
            user: {
              ...this.state.user,
              username: event.target.value
            }
          })}
          className="form-control"
          value={this.state.user.username}/>
          <button onClick={this.saveUser}>
            Save
          </button>
        <input className="form-control" readOnly={true} value={this.state.user.userid}/>
        <input
            onChange={(event) => this.setState({
              user: {
                ...this.state.user,
                password: event.target.value
              }
            })}
            className="form-control"
            value={this.state.user.password}/>
        <button onClick={this.saveUserPassword}>
          Save
        </button>
        <input className="form-control" readOnly={true} value={this.state.user.userid}/>
        <input
            onChange={(event) => this.setState({
              user: {
                ...this.state.user,
                phonenumber: event.target.value
              }
            })}
            className="form-control"
            value={this.state.user.phonenumber}/>
        <button onClick={this.saveUserPhone}>
          Save
        </button>
        <input
            onChange={(event) => this.setState({
              user: {
                ...this.state.user,
                emailaddress: event.target.value
              }
            })}
            className="form-control"
            value={this.state.user.emailaddress}/>
        <button onClick={this.saveUserEmail}>
          Save
        </button>
        <input
            onChange={(event) => this.setState({
              user: {
                ...this.state.user,
                accountbalance: event.target.value
              }
            })}
            className="form-control"
            value={this.state.user.accountbalance}/>
        <button onClick={this.saveUserBalance}>
          Save
        </button>
          <a href="user-list.html">
            Done
          </a>
      </div>
    )
  }
}

ReactDOM.render(
  <UserEditor/>, document.getElementById("root"))
