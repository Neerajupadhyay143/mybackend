import { asyncHandler } from "../utils/asyncHandler.js";

const regesterUSers = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "neeraj or code"
    })
})

export { regesterUSers }