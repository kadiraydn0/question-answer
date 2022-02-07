export function firstController(req, res) {
    console.log(1)
    console.log(req.headers)
    res.status(200).json({ success: true })
}