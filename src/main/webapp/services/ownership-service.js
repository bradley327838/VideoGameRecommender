const FIND_ALL_OWNERSHIPS = "http://localhost:8080/findAllOwnerships"
const FIND_OWNERSHIP_BY_ID = "http://localhost:8080/findOwnershipById"
const CREATE_OWNERSHIP_URL = "http://localhost:8080/createOwnership"
const DELETE_OWNERSHIP_URL = "http://localhost:8080/deleteOwnership"
const RENAME_OWNERSHIP = "http://localhost:8080/renameOwnership"
const PLAYONEHOUR = "http://localhost:8080/playOneHour"

const findAllOwnerships = () =>
    fetch(`${FIND_ALL_OWNERSHIPS}`)
    .then(response => response.json())

const findOwnershipById = (id) =>
    fetch(`${FIND_OWNERSHIP_BY_ID}/${id}`)
    .then(response => response.json())

const createOwnership = (glid, vgid) =>
    fetch(`${CREATE_OWNERSHIP_URL}/${glid}/${vgid}`)
    .then(response => response.json())

const deleteOwnership = (id) =>
    fetch(`${DELETE_OWNERSHIP_URL}/${id}`)

const renameOwnership = (ownership) =>
    fetch(`${RENAME_OWNERSHIP}/${ownership.id}/${ownership.title}`)
    .then(response => response.json())

const playOneHour = (id) =>
    fetch(`${PLAYONEHOUR}/${id}`)
    .then(response => response.json())