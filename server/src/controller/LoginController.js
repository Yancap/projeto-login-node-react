const { hash, compare } = require("bcryptjs");
const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class LoginController{
    async show(request, response){
        const { name, id, avatar } = request.body;
        response.json({ message: "Sucesso", name: name, id: id, avatar: avatar});
    }
    async update(request, response){
        const { id, newPassword, oldPassword } = request.body
        const database = await sqliteConnection()
        const checkData = await database.get("SELECT * FROM users WHERE id = ?", [id])
        const checkPassword = await compare(oldPassword, checkData.password)
        if(!checkPassword){
            throw new AppError("Digite a Senha Correta")
        }
        const hashPassword = await hash(newPassword, 8)
        await database.run("UPDATE users SET password = ? WHERE id = ?", [hashPassword, id])
        response.json({message: "Senha alterada com sucesso"})
    }
}

module.exports = LoginController