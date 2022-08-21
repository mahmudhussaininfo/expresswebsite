const path = require('path');

const marriage = (req, res) => {
    const { name, age } = req.body;

    if (age > 21) {
        res.status(200).send(`Hello ${name}, your marriage age is okay now`);

    } else {

        res.status(400).send(`Sorry ${name}, your age is not perfect for marriage`);

    }
}
const currcheck = (req, res) => {

    const { dollar } = req.params;
    res.status(200).send(`dollar ${dollar} = ${dollar * 92} BDT`);
}

module.exports = {
    marriage,
    currcheck
}