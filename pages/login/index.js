import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
// Your login function in a React component
const loginUser = async (userData) => {
    try {
        const response = await fetch('/api/dangnhap', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            localStorage.setItem('username', data.username);

        } else {
            const data = await response.json();
            console.error('Error during login:', data.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};

// Example usage:
const userData = {
    email: email,
    password: password,
};


    const handleLogin = () => {
        loginUser(userData);

    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-primary text-2xl mb-4">Login</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        email
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    onClick={handleLogin}
                >
                    Đăng nhập 
                </button>
                <Link href={"/dangky"}>
                    Đăng Ký
                </Link>
            </div>
        </div>
    );
};

export default Login;
