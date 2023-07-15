const UserService = require('../services/user.service');
const AuthService = require('../services/auth.service');


const register = async (req, res) => {
  try {
    const payload = req.body;

    await UserService.createUser(payload);

    return res.json({ message: 'CREATED' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

const login = async (req, res) => {
  try {
    const payload = req.body;

    const token = await AuthService.login(payload);

    return res.json({ token })
  }
  catch (e) {
    console.error(e)
    return res.status(401).json({ message: 'UNAUTHORIZED'});
  }
};


module.exports = {
  register,
  login,
}