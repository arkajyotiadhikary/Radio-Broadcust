const stream = (req, res) => {
    res.status(200).json({ Message: "~~ Hello Radio ~~" });
};

module.exports = {
    stream,
};
