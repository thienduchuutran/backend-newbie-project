const getHomepage = (req, res) =>{
    //this is where we handle data (aka the controller)
    res.send('Hello World')
}

const getABC = (req, res) => {
    res.send('checking')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT
}