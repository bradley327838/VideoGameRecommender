const FIND_ALL_VIDEOGAMES = "http://localhost:8080/findAllVideoGames"
const FIND_VIDEOGAME_BY_ID = "http://localhost:8080/findVideoGameById"
const FIND_GAMEDEVELOPER = "http://localhost:8080/findGameDeveloperName"
const CREATE_VIDEOGAME_URL = "http://localhost:8080/createVideoGame"
const CREATE_VIDEOGAMEWITHID_URL = "http://localhost:8080/createVideoGameWithID"
const DELETE_VIDEOGAME_URL = "http://localhost:8080/deleteVideoGame"
const RENAME_VIDEOGAME = "http://localhost:8080/renameVideoGame"
const DATE_VIDEOGAME = "http://localhost:8080/newDateVideoGame"
const PRICE_VIDEOGAME = "http://localhost:8080/newPriceVideoGame"
const DESCRIPTION_VIDEOGAME = "http://localhost:8080/newDescriptionVideoGame"
const GAMEDEVELOPERID_VIDEOGAME = "http://localhost:8080/newGameDeveloperIDVideoGame"

const findAllVideoGames = () =>
    fetch(`${FIND_ALL_VIDEOGAMES}`)
    .then(response => response.json())

const findVideoGameById = (id) =>
    fetch(`${FIND_VIDEOGAME_BY_ID}/${id}`)
    .then(response => response.json())

const findGameDeveloper = async(id) =>
    fetch(`${FIND_GAMEDEVELOPER}/${id}`)
    .then(response => response.text())

const createVideoGame = () =>
    fetch(`${CREATE_VIDEOGAME_URL}`)
    .then(response => response.json())

const createVideoGameWithID = (id) =>
    fetch(`${CREATE_VIDEOGAMEWITHID_URL}/${id}`)
    .then(response => response.json())

const deleteVideoGame = (id) =>
    fetch(`${DELETE_VIDEOGAME_URL}/${id}`)

const renameVideoGame = (videogame) =>
    fetch(`${RENAME_VIDEOGAME}/${videogame.videoGameID}/${videogame.name}`)
    .then(response => response.json())

const newDateVideoGame = (videogame) =>
    fetch(`${DATE_VIDEOGAME}/${videogame.videoGameID}/${videogame.releaseDate}`)
    .then(response => response.json())

const newPriceVideoGame = (videogame) =>
    fetch(`${PRICE_VIDEOGAME}/${videogame.videoGameID}/${videogame.price}`)
    .then(response => response.json())

const newDescriptionVideoGame = (videogame) =>
    fetch(`${DESCRIPTION_VIDEOGAME}/${videogame.videoGameID}/${videogame.description}`)
    .then(response => response.json())

const newGameDeveloperIDVideoGame = (videogame) =>
    fetch(`${GAMEDEVELOPERID_VIDEOGAME}/${videogame.videoGameID}/${videogame.gameDeveloperID}`)
    .then(response => response.json())