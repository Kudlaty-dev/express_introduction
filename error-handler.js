exports.errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
      return next(err)
    }
    res.status(err.status)
    res.render('error', { error: err })
  }
