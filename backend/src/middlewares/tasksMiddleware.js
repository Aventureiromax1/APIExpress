const validateBody = (req, res, next) => {
  const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    if (body.title === undefined || body.description === undefined) {
        return res.status(400).json({ message: 'Title and description cannot be undefined' });
    }
    if (body.title === '' || body.description === '') {
        return res.status(400).json({ message: 'Title and description cannot be empty' });
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

