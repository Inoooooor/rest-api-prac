const db = require("../db")

class UserConttroller {
  async createUser(req, res) {
    const { name, surname } = req.body
    console.table({ name, surname })

    const newPerson = await db.query("INSERT INTO person (name, surname) values ($1, $2) RETURNING *", [name, surname])
    res.json(newPerson.rows[0])
  }

  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM person")
    res.json(users.rows)
  }

  async getOneUser(req, res) {
    const { id } = req.params
    const user = await db.query("SELECT * FROM person where id = $1", [id])

    if (user.rows.length === 0) res.json("No such user")

    res.json(user.rows[0])
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body

    const user = await db.query("UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *", [
      name,
      surname,
      id,
    ])

    res.json(user.rows[0])
  }

  async deleteUser(req, res) {
    const { id } = req.params
    const user = await db.query("DELETE FROM person where id = $1", [id])
    res.json(user.rows[0])
  }
}

module.exports = new UserConttroller()
