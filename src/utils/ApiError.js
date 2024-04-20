class ApiError extends Error {
    constructor(
        statusCode,
        error = [],
        data,
        message = "somthing went wrong ",
        statck = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.success = false
        this.errors = errors


        if (statck) {
            this.statck = statck

        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }

