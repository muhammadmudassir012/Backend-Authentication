require('dotenv').config()
const express = require('express')
// const router  = require('./src/routes/routes')
// const transactionRoute = require('./src/routes/TransactionRoute')
const app = express()
const PORT = process.env.PORT
// const connectDb = require('./src/utils/app.utils')
const cors = require('cors')
const connectDb = require('./src/utils/app.utils')
const router = require('./src/routes/authenticationRoutes')

app.use(express.json())

var corsOptions = {
  origin: '*',
  methods: "GET,POST,PUT,DELETE",
  Credential: true
}

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.use('/api/users/',router)

app.use(cors(corsOptions))

// app.use('/api/users/',router)
// app.use('/api/transactions/',transactionRoute)


connectDb().then(() => {
  app.listen(PORT, () => {
      console.log(`Server is running on the port ${PORT}`);
  })
})

