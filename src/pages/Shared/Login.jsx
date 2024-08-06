// // // // import { useState } from 'react';
// // // // // import { useRouter } from 'next/router';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Card, CardContent, CardFooter, CardHeader, CardTitle ,CardDescription} from '@/components/ui/card';
// // // // import { Input } from '@/components/ui/input';
// // // // import { Label } from '@/components/ui/label';

// // // // const Login = () => {
    
// // // //     return (
// // // //         <div className='min-h-screen flex items-center justify-center'>
// // // //             <Card className="w-full max-w-md shadow-xl rounded-xl">
// // // //                 <CardHeader className="p-8xl text-center border-b ">
// // // //                     <CardTitle className="text-6xl font-bold text-gray-800">Login</CardTitle>
// // // //                     <CardDescription className="mt-2 text-lg text-gray-600">
// // // //                         Please enter your credentials to access your account.
// // // //                     </CardDescription>
// // // //                 </CardHeader>
// // // //                 <CardContent className="p-8">
// // // //                     <div className="space-y-6">
// // // //                         <div>
// // // //                             <Label htmlFor="email" className="block text-sm text-2xl text-gray-700">Email</Label>
// // // //                             <Input
// // // //                                 id="email"
// // // //                                 type="email"
// // // //                                 placeholder="Your email address"
// // // //                                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
// // // //                             />
// // // //                         </div>
// // // //                         <div>
// // // //                             <Label htmlFor="password" className="block text-sm font-medium text-gray-700 text-2xl">Password</Label>
// // // //                             <Input
// // // //                                 id="password"
// // // //                                 type="password"
// // // //                                 placeholder="Your password"
// // // //                                 className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
// // // //                             />
// // // //                         </div>
// // // //                     </div>
// // // //                 </CardContent>
// // // //                 <CardFooter className="p-8 text-center border-t ">
// // // //                     <Button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
// // // //                         Login
// // // //                     </Button>
// // // //                 </CardFooter>
// // // //             </Card>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Login;



// // // import { useState } from 'react';
// // // import { Button } from '@/components/ui/button';
// // // import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// // // import { Input } from '@/components/ui/input';
// // // import { Label } from '@/components/ui/label';

// // // const Login = () => {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [errors, setErrors] = useState({});

// // //     const validate = () => {
// // //         const newErrors = {};
// // //         if (!email) {
// // //             newErrors.email = 'Email is required';
// // //         } else if (!/\S+@\S+\.\S+/.test(email)) {
// // //             newErrors.email = 'Email address is invalid';
// // //         }
// // //         if (!password) {
// // //             newErrors.password = 'Password is required';
// // //         } else if (password.length < 6) {
// // //             newErrors.password = 'Password must be at least 6 characters';
// // //         }
// // //         return newErrors;
// // //     };

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         const newErrors = validate();
// // //         if (Object.keys(newErrors).length === 0) {
// // //             // Perform login logic here
// // //             // If login is successful:
// // //             window.location.href = '/home'; // Navigate to the home page
// // //         } else {
// // //             setErrors(newErrors);
// // //         }
// // //     };


// // //     return (
// // //         <div className='min-h-screen flex items-center justify-center'>
// // //             <Card className="w-full max-w-md shadow-xl rounded-xl">
// // //                 <CardHeader className="p-8 text-center border-b ">
// // //                     <CardTitle className="text-3xl font-bold text-gray-800">Login</CardTitle>
// // //                     <CardDescription className="mt-2 text-lg text-gray-600">
// // //                         Please enter your credentials to access your account.
// // //                     </CardDescription>
// // //                 </CardHeader>
// // //                 <form onSubmit={handleSubmit}>
// // //                     <CardContent className="p-8">
// // //                         <div className="space-y-6">
// // //                             <div>
// // //                                 <Label htmlFor="email" className="block text-sm text-gray-700">Email</Label>
// // //                                 <Input
// // //                                     id="email"
// // //                                     type="email"
// // //                                     value={email}
// // //                                     onChange={(e) => setEmail(e.target.value)}
// // //                                     placeholder="Your email address"
// // //                                     className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
// // //                                 />
// // //                                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// // //                             </div>
// // //                             <div>
// // //                                 <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
// // //                                 <Input
// // //                                     id="password"
// // //                                     type="password"
// // //                                     value={password}
// // //                                     onChange={(e) => setPassword(e.target.value)}
// // //                                     placeholder="Your password"
// // //                                     className={`mt-1 block w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
// // //                                 />
// // //                                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// // //                             </div>
// // //                         </div>
// // //                     </CardContent>
// // //                     <CardFooter className="p-8 text-center border-t ">
// // //                         <Button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
// // //                             Login
// // //                         </Button>
// // //                     </CardFooter>
// // //                 </form>
// // //             </Card>
// // //         </div>
// // //     );
// // // };

// // // export default Login;


// // import { useState } from 'react';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';

// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [errors, setErrors] = useState({});

// //     const validate = () => {
// //         const newErrors = {};
// //         if (!email) {
// //             newErrors.email = 'Email is required';
// //         } else if (!/\S+@\S+\.\S+/.test(email)) {
// //             newErrors.email = 'Email address is invalid';
// //         }
// //         if (!password) {
// //             newErrors.password = 'Password is required';
// //         } else if (password.length < 6) {
// //             newErrors.password = 'Password must be at least 6 characters';
// //         }
// //         return newErrors;
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const newErrors = validate();
// //         if (Object.keys(newErrors).length === 0) {
// //             // Mock API call to check if user exists
// //             const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
// //             const user = existingUsers.find(user => user.email === email && user.password === password);
// //             if (user) {
// //                 toast.success('Login successful!');
// //                 setTimeout(() => {
// //                     window.location.href = '/'; // Navigate to home page
// //                 }, 2000);
// //             } else {
// //                 toast.error('Incorrect user. Please create an account or try again.');
// //             }
// //         } else {
// //             setErrors(newErrors);
// //         }
// //     };

// //     return (
// //         <div className='min-h-screen flex items-center justify-center'>
// //             <ToastContainer />
// //             <Card className="w-full max-w-md shadow-xl rounded-xl">
// //                 <CardHeader className="p-8 text-center border-b ">
// //                     <CardTitle className="text-3xl font-bold text-gray-800">Login</CardTitle>
// //                     <CardDescription className="mt-2 text-lg text-gray-600">
// //                         Please enter your credentials to access your account.
// //                     </CardDescription>
// //                 </CardHeader>
// //                 <form onSubmit={handleSubmit}>
// //                     <CardContent className="p-8">
// //                         <div className="space-y-6">
// //                             <div>
// //                                 <Label htmlFor="email" className="block text-sm text-gray-700">Email</Label>
// //                                 <Input
// //                                     id="email"
// //                                     type="email"
// //                                     value={email}
// //                                     onChange={(e) => setEmail(e.target.value)}
// //                                     placeholder="Your email address"
// //                                     className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
// //                                 />
// //                                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //                             </div>
// //                             <div>
// //                                 <Label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</Label>
// //                                 <Input
// //                                     id="password"
// //                                     type="password"
// //                                     value={password}
// //                                     onChange={(e) => setPassword(e.target.value)}
// //                                     placeholder="Your password"
// //                                     className={`mt-1 block w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
// //                                 />
// //                                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// //                             </div>
// //                         </div>
// //                     </CardContent>
// //                     <CardFooter className="p-8 text-center border-t ">
// //                         <Button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
// //                             Login
// //                         </Button>
// //                     </CardFooter>
// //                 </form>
// //             </Card>
// //         </div>
// //     );
// // };

// // export default Login;
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate(); // Initialize useNavigate

//     const validate = () => {
//         const newErrors = {};
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
//             // Front-end only validation logic
//             const existingUsers = [
//                 { email: 'iam@example.com', password: 'password123' }, // Example user
//             ];
//             const adminUsers = [
//                 { email: 'admin@example.com', password: 'admin123' }, // Example admin
//             ];
//             const user = existingUsers.find(user => user.email === email && user.password === password);
//             const admin = adminUsers.find(admin => admin.email === email && admin.password === password);

//             if (user) {
//                 toast.success('Login successful!');
//                 setTimeout(() => {
//                     navigate('/'); // Navigate to home page
//                 }, 2000);
//             } else if (admin) {
//                 toast.success('Login successful!');
//                 setTimeout(() => {
//                     navigate('/admin/dashboard'); // Navigate to admin dashboard
//                 }, 2000);
//             } else {
//                 toast.error('Incorrect credentials. Please try again.');
//             }
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div className='min-h-screen flex items-center justify-center'>
//             <ToastContainer />
//             <Card className="w-full max-w-md shadow-xl rounded-xl">
//                 <CardHeader className="p-8 text-center border-b">
//                     <CardTitle className="text-3xl font-bold text-gray-800">Login</CardTitle>
//                     <CardDescription className="mt-2 text-lg text-gray-600">
//                         Please enter your credentials to access your account.
//                     </CardDescription>
//                 </CardHeader>
//                 <form onSubmit={handleSubmit}>
//                     <CardContent className="p-8">
//                         <div className="space-y-6">
//                             <div>
//                                 <Label htmlFor="email" className="block text-sm text-gray-700">Email</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Your email address"
//                                     className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
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
//                                     placeholder="Your password"
//                                     className={`mt-1 block w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                             </div>
//                         </div>
//                     </CardContent>
//                     <CardFooter className="p-8 text-center border-t">
//                         <Button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
//                             Login
//                         </Button>
//                     </CardFooter>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default Login;


// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
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
            const existingUsers = [
                { email: 'iam@example.com', password: 'password123' },
            ];
            const adminUsers = [
                { email: 'admin@example.com', password: 'admin123' },
            ];
            const user = existingUsers.find(user => user.email === email && user.password === password);
            const admin = adminUsers.find(admin => admin.email === email && admin.password === password);

            if (user) {
                toast.success('Login successful!');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else if (admin) {
                toast.success('Login successful!');
                setTimeout(() => {
                    navigate('/admin/dashboard');
                }, 2000);
            } else {
                toast.error('Incorrect credentials. Please try again.');
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <ToastContainer />
            <Card className="w-full max-w-md shadow-xl rounded-xl">
                <CardHeader className="p-8 text-center border-b">
                    <CardTitle className="text-3xl font-bold text-gray-800">Login</CardTitle>
                    <CardDescription className="mt-2 text-lg text-gray-600">
                        Please enter your credentials to access your account.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="p-8">
                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="email" className="block text-sm text-gray-700">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
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
                                    placeholder="Your password"
                                    className={`mt-1 block w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-8 text-center border-t">
                        <Button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
           
        </div>
    );
};

export default Login;
