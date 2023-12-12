import connectDB from '../../database/db';
import User from '../../database/model/User';

connectDB();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, username, password } = req.body;

        try {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ message: 'Email is already registered' });
            }

            const newUser = new User({ email, username, password });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
