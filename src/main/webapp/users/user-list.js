class UserList extends React.Component {

  state = {
    users: []
  }

  findAllUsers = () =>
    findAllUsers()
      .then(users => this.setState({users}))

  componentDidMount = () =>
    this.findAllUsers()

  createUser = () => {
    if (localStorage.getItem("Type") != "Moderator") {
      alert("You do not have access to this feature!")
    }
    else {
      createUser()
      .then((this.findAllUsers))
    }
  }


  deleteUser = (id) => {
    if (localStorage.getItem("Type") != "Moderator") {
      alert("You do not have access to this feature!")
    }
    else {
      deleteUser(id)
      .then(this.findAllUsers)
    }
  }


  render() {
    return(
      <div>
        <h1>User List</h1>
        <table>
          <tbody>
          {
            this.state.users.map(user =>
              <tr>
                <td>
                  {user.username}
                </td>
                <td>
                  <button onClick={() => this.deleteUser(user.userid)}>
                    Delete
                  </button>
                </td>
                <td>
                  <a href={`user-editor.html?id=${user.userid}`}>
                    Edit
                  </a>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
        <button onClick={this.createUser}>
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
  <UserList/>, document.getElementById("root"))
