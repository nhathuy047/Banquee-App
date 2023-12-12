import User from "../../database/model/User";
import connectDB from '../../database/db';
connectDB();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            // Find the user by email
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Check the password
            if (user.password !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Successfully logged in
            res.status(200).json({ message: 'Login successful',data:user });
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
