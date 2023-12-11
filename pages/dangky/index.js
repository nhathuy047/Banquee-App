import { useState } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const registerUser = async (userData) => {
        try {
            const response = await fetch('/api/dangky', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            if (response.ok) {
                router.push('/login');  // Replace '/login' with your desired route

            } else {
                const data = await response.json();
                console.error('Error registering user:', data.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
    
    // Example usage:
    const userData = {
        email: email,
        username: username,
        password: password,
    };
    
    
    const handleRegister = () => {
        registerUser(userData);

    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-primary text-2xl mb-4">Register</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="bg-primary text-white p-2 rounded-md hover:bg-primary-dark"
                    onClick={handleRegister}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
