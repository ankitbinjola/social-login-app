exports.login = (req, res, next) => {
    try {
    res.status(200).json({
        success: true
    })        
    } catch (error) {
        return error;
    }

}

