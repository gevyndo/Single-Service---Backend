import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    const { username, password, confirmPassword} = req.body;
    if (password !== confirmPassword){
        return res.status(400).json({msg: "Password and Confirm Password Doesn't match!"});
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        await Users.create({
            username: username,
            password: hashedPassword
        })
        res.json({msg: "Registration Success!"})
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const users = await Users.findAll({
            where: {
                username: req.body.username
            }
        })

        const passwordMatch = await bcrypt.compare(req.body.password, users[0].password);
        if (!passwordMatch){
            return res.status(400).json({msg: "Wrong Password!"});
        }

        const userId = users[0].id;
        const username = users[0].username;
        const accessToken = jwt.sign({userId, username}, process.env.ACCESS_TOKEN_SECRET);

        res.json({ status: "success", message: "Login Success", data: users[0], token: accessToken });

    } catch (error) {
        res.status(404).json({msg: "User Not Found!"})
    }
}