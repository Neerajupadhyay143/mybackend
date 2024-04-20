// const asyncHandler = () => {
//     (req, res, next) => {
//         Promise.resolve(asyncHandler(req, res, next)).catch((err) => next(err))
//     }
// }


const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500)
    }
}
export { asyncHandler };


