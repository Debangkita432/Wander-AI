class ExpressError extends Error {
  constructor(statusCode, message) {
    super(); // Pass the message to the Error constructor
    this.statusCode = statusCode; // Custom status code for the error
    this.message = message; // Set the name to 'ExpressError'
  }
}

module.exports = ExpressError;
