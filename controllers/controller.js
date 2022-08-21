const path = require('path');

const homepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}
const aboutpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
}
const blogpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'));
}

// export
module.exports = {
    homepage,
    aboutpage,
    blogpage

}