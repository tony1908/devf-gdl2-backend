// feat/NC-3_change_pwd_mutation
// Crear mutación para cambiar contraseñas.
// Se debe crear la mutación que recibe como parámetro la contraseña nueva y validar el formato nuevo.

const User = require("../../types/User")
const userInput = require("../../inputs/userInput")
const { UsersDB  } = require("../../../database/models")

function validatePassword (password) {
    if (lenght(password) > 6) {
        // password valid
    }
    else {
        // password NOT valid
    }
}