const logger = (req, res, next) => {
    console.log("Request:", req.method, req.url);
    console.log("IP address:", req.ip);
    console.log("\n");
    next();
};

module.exports = logger;
