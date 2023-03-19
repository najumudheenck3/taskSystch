class customError extends Error{
    constructor(status,message){
        super(message)
        this.status(status)
    }
}

exports.createError=(status,message)=>{
    return new customError(status,message)
}