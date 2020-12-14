const FIND_ALL_REVIEWS = "http://localhost:8080/findAllReviews"
const FIND_REVIEW_BY_ID = "http://localhost:8080/findReviewById"
const CREATE_REVIEW_URL = "http://localhost:8080/createReview"
const CREATE_REVIEW_WITHIDS_URL = "http://localhost:8080/createReviewWithIDS"
const DELETE_REVIEW_URL = "http://localhost:8080/deleteReview"
const RENAME_REVIEW = "http://localhost:8080/renameReview"
const FIND_USER_BY_ID = "http://localhost:8080/findUserById"
const SET_REVIEW = "http://localhost:8080/setReview"

const findAllReviews = () =>
    fetch(`${FIND_ALL_REVIEWS}`)
    .then(response => response.json())

const findReviewById = (id) =>
    fetch(`${FIND_REVIEW_BY_ID}/${id}`)
    .then(response => response.json())

const createReview = () =>
    fetch(`${CREATE_REVIEW_URL}`)
    .then(response => response.json())

const createReviewWithIDS = (uID, gID,descr,rat) =>
    fetch(`${CREATE_REVIEW_WITHIDS_URL}/${uID}/${gID}/${descr}/${rat}`)
    .then(response => response.json())

const deleteReview = (id) =>
    fetch(`${DELETE_REVIEW_URL}/${id}`)

const renameReview = (review) =>
    fetch(`${RENAME_REVIEW}/${review.reviewid}/${review.reviewdescription}`)
    .then(response => response.json())

const setReview = (review) =>
    fetch(`${SET_REVIEW}/${review.reviewid}/${review.reviewdescription}/${review.rating}`)
    .then(response => response.json())

const findUserById = (id) =>
    fetch(`${FIND_USER_BY_ID}/${id}`)
    .then(response => response.json())