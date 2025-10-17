const validateBody = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response.status(400).json({ message: 'The field "title" is required' });
  }

  if (body.title === '') {
    return response.status(400).json({ message: 'title cannot be empty' });
  }

  next();
};
const validateFieldStatus = (req, res, next) => {
    const { body } = req;
    if(body.status === undefined) {
        return res.status(400).json({ message: 'Status cannot be undefined' });
    }
    if(body.status === '') {
        return res.status(400).json({ message: 'Status cannot be empty' });
    }
    next();
};


module.exports = {
    validateBody,
    validateFieldStatus
};

