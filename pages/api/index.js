const data = require('../../data')

export default function handler(req, res) {
  console.log(data)
  res.status(200).json(data)
}