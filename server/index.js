const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ahora', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const taskRouter = require('./routes/taskRoutes');
app.use('/api/tasks', taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
