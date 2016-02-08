'use strict';

var util = require('util');

module.exports = {
  listBooks: listBooks,
  getBook: getBook,
  createBook: createBook,
  updateBook: updateBook,
  deleteBook: deleteBook
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function listBooks(req, res) {
  res.json([{title: 'un titre'}]);

  console.log('allo');
}

function getBook(req, res) {

}

function createBook(req, res) {
  console.log('createBook');
  console.log('request body', req.body);
  console.log('locals', req.app.locals);
  res.location(req.baseUrl + '/books/12345');
  res.status(201).end();
}

function updateBook(req, res) {

}

function deleteBook(req, res) {

}