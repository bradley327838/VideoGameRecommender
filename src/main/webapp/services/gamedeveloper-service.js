const FIND_ALL_GAMEDEVELOPERS = "http://localhost:8080/findAllGameDevelopers"
const FIND_GAMEDEVELOPER_BY_ID = "http://localhost:8080/findGameDeveloperById"
const CREATE_GAMEDEVELOPER_URL = "http://localhost:8080/createGameDeveloper"
const DELETE_GAMEDEVELOPER_URL = "http://localhost:8080/deleteGameDeveloper"
const RENAME_GAMEDEVELOPER = "http://localhost:8080/renameGameDeveloper"

const findAllGameDevelopers = () =>
    fetch(`${FIND_ALL_GAMEDEVELOPERS}`)
    .then(response => response.json())

const findGameDeveloperById = (id) =>
    fetch(`${FIND_GAMEDEVELOPER_BY_ID}/${id}`)
    .then(response => response.json())

const createGameDeveloper = () =>
    fetch(`${CREATE_GAMEDEVELOPER_URL}`)
    .then(response => response.json())

const deleteGameDeveloper = (id) =>
    fetch(`${DELETE_GAMEDEVELOPER_URL}/${id}`)

const renameGameDeveloper = (gamedeveloper) =>
    fetch(`${RENAME_GAMEDEVELOPER}/${gamedeveloper.gamedeveloperid}/${gamedeveloper.name}`)
    .then(response => response.json())