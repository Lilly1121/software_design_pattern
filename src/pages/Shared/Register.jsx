// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Register = () => {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         const newErrors = {};
//         if (!name) {
//             newErrors.name = 'Name is required';
//         }
//         if (!phone) {
//             newErrors.phone = 'Phone number is required';
//         } else if (!/^\d{10}$/.test(phone)) {
//             newErrors.phone = 'Phone number is invalid';
//         }
//         if (!email) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Email address is invalid';
//         }
//         if (!password) {
//             newErrors.password = 'Password is required';
//         } else if (password.length < 6) {
//             newErrors.password = 'Password must be at least 6 characters';
//         }
//         return newErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newErrors = validate();
//         if (Object.keys(newErrors).length === 0) {
//             // Perform registration logic here
//             // If registration is successful:
//             window.location.href = '/login'; // Navigate to the login page
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div className='min-h-screen flex items-center justify-center'>
//             <Card className="w-full max-w-md shadow-xl rounded-xl ">
//                 <CardHeader className="p-4 text-center border-b ">
//                     <CardTitle className="text-5xl font-semibold text-gray-800">Create an Account</CardTitle>
//                     <CardDescription className="mt-1 text-base text-gray-600">
//                         Enter your details below to create your account.
//                     </CardDescription>
//                 </CardHeader>
//                 <form onSubmit={handleSubmit}>
//                     <CardContent className="p-4">
//                         <div className="space-y-4">
//                             <div>
//                                 <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
//                                 <Input
//                                     id="name"
//                                     type="text"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     placeholder="Your Name"
//                                     className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="phone-no" className="block text-sm font-medium text-gray-700">Phone Number</Label>
//                                 <Input
//                                     id="phone-no"
//                                     type="tel"
//                                     value={phone}
//                                     onChange={(e) => setPhone(e.target.value)}
//                                     placeholder="Your Phone Number"
//                                     className={`mt-1 block w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Your Email"
//                                     className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     placeholder="Your Password"
//                                     className={`mt-1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                             </div>
//                         </div>
//                     </CardContent>
//                     <CardFooter className="p-4 text-center border-t ">
//                         <Button type="submit" className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
//                             Create Account
//                         </Button>
//                     </CardFooter>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default Register;

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            // Mock API call to check if user exists and create new user
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.some(user => user.email === email);
            if (userExists) {
                toast.error('User already exists. Try to log in.');
            } else {
                const newUser = { name, phone, email, password };
                localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
                toast.success('Account created successfully. Please log in.');
                setTimeout(() => {
                    window.location.href = '/login'; // Navigate to login page
                }, 2000);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <ToastContainer />
            <Card className="w-full max-w-md shadow-xl rounded-xl ">
                <CardHeader className="p-4 text-center border-b ">
                    <CardTitle className="text-5xl font-semibold text-gray-800">Create an Account</CardTitle>
                    <CardDescription className="mt-1 text-base text-gray-600">
                        Enter your details below to create your account.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="p-4">
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <Label htmlFor="phone-no" className="block text-sm font-medium text-gray-700">Phone Number</Label>
                                <Input
                                    id="phone-no"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Your Phone Number"
                                    className={`mt-1 block w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                    className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your Password"
                                    className={`mt-1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 text-center border-t ">
                        <Button type="submit" className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            Create Account
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default Register;
