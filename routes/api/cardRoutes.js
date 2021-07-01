const router = require('express').Router();

router.get('/aaa', (req, res) =>
{
    console.log('Hello');
    res.status(200).json({'Hello World': 1});
});


module.exports = router;