// const data = require('../../../data')

// export default function handler(req, res) {
//     // console.log(data.data);
//     const car = data.data.find(car => car.id.toString() === req.query.id)
//     if (!car) {
//         res.status(404).send('Car not found')
//     } else {
//         res.json(car)
//     }
//     }