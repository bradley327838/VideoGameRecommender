const FIND_ALL_USERS = "http://localhost:8080/findAllUsers"
const FIND_USER_BY_ID = "http://localhost:8080/findUserById"
const CREATE_USER_URL = "http://localhost:8080/createUser"
const CREATE_GAMESLIBRARY_URL = "http://localhost:8080/createGamesLibrary"
const FIND_GAMESLIBRARY_URL = "http://localhost:8080/findAllGamesLibrarys"
const DELETE_USER_URL = "http://localhost:8080/deleteUser"
const RENAME_USER = "http://localhost:8080/renameUser"
const RENAME_USERPASSWORD = "http://localhost:8080/renameUserPassword"
const RENAME_USERPHONE = "http://localhost:8080/renameUserPhone"
const RENAME_USERBALANCE = "http://localhost:8080/renameUserBalance"
const RENAME_USEREMAIL = "http://localhost:8080/renameUserEmail"

const findAllUsers = () =>
    fetch(`${FIND_ALL_USERS}`)
    .then(response => response.json())

const findUserById = (id) =>
    fetch(`${FIND_USER_BY_ID}/${id}`)
    .then(response => response.json())

const createUser = () =>
    fetch(`${CREATE_USER_URL}`)
    .then(response => response.json())

const createGamesLibrary = (id) =>
    fetch(`${CREATE_GAMESLIBRARY_URL}/${id}`)
    .then(response => response.json())

const findAllGamesLibrary = () =>
    fetch(`${FIND_GAMESLIBRARY_URL}`)
    .then(response => response.json())

const deleteUser = (id) =>
    fetch(`${DELETE_USER_URL}/${id}`)

const renameUser = (user) =>
    fetch(`${RENAME_USER}/${user.userid}/${user.username}`)
    .then(response => response.json())

const renameUserPassword = (user) =>
    fetch(`${RENAME_USERPASSWORD}/${user.userid}/${user.password}`)
    .then(response => response.json())

const renameUserPhone = (user) =>
    fetch(`${RENAME_USERPHONE}/${user.userid}/${user.phonenumber}`)
    .then(response => response.json())

const renameUserEmail = (user) =>
    fetch(`${RENAME_USEREMAIL}/${user.userid}/${user.emailaddress}`)
    .then(response => response.json())

const renameUserBalance = (user) =>
    fetch(`${RENAME_USERBALANCE}/${user.userid}/${user.accountbalance}`)
    .then(response => response.json())

const subtract = (amount, user) =>
    fetch(`${RENAME_USERBALANCE}/${user.userid}/${user.accountbalance - amount}`)
    .then(response => response.json())