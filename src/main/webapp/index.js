class PeopleList extends React.Component {

  state = {
    people: {}
  }

  findAllPeople = () =>
      findAllUsers()
      .then(Users => {
        findAllGameDevelopers().then(gamedevs => {
          let people = {}
          people["users"] = Users
          people["gamedevs"] = gamedevs
          this.setState({people})
          })
      })

  componentDidMount = () =>
      this.findAllPeople()

  setUser(name, type, id) {
    localStorage.setItem("Name", name);
    localStorage.setItem("Type", type);
    localStorage.setItem("ID", id);
  }

  render() {
    if (this.state.people["users"] != undefined) {
      return(
          <div>
            <h1>Login as User</h1>
            <ul>
              {
                this.state.people["users"].map(user =>
                  <li>
                    <a href='videogames/home.html' onClick={() => this.setUser(user.username,'User',user.userid)}>
                      {user.username}
                    </a>
                  </li>
                )
              }
            </ul>
            <h1>Login as Game Developer</h1>
            <ul>
              {
                this.state.people["gamedevs"].map(gd =>
                    <li>
                      <a href='videogames/home.html' onClick={() => this.setUser(gd.name,'Game-Developer',gd.gamedeveloperid)}>
                        {gd.name}
                      </a>
                    </li>
                )
              }
            </ul>
            <h1>Login as Moderator</h1>
            <ul>
              <li>
                <a href="videogames/home.html" onClick={() => this.setUser("Jesus","Moderator",69)}>
            Jesus
        </a>
    </li>
</ul>
          </div>
      )
    }
    else {
      return <p>PCC</p>
    }
  }
}

ReactDOM.render(
    <PeopleList/>, document.getElementById("root"))
