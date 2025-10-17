const app = require('./app');
const router = require('./router');
require('dotenv').config();

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server running on port ${port}`));
app.use(router);
