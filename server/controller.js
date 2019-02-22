module.exports={

getAllHouses:(req, res) => {
    const db = req.app.get('db')
    db.get_all_houses().then(resp => {
    res.status(200).send(resp)
        })
    },

addHouse:  (req, res) => {
    const db = req.app.get('db')
    const {name, address, city, state, zip}= req.body
    db.add_house([name, address, city, state, zip]).then(resp => {
        res.status(200).send(resp)
    })
}






}