// import { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// // const Card = styled.div`
// //   display: flex;
// //   align-items: start;
// //   justify-content: center;
// //   min-height: 100vh; /* Fixed */
// //   background-color: #f0f0f0; /* Example background color */
// // `;
// const ContactUs = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [subject, setSubject] = useState('');
//     const [message, setMessage] = useState('');
//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         const newErrors = {};
//         if (!name) {
//             newErrors.name = 'Name is required';
//         }
//         if (!email) {
//             newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = 'Email address is invalid';
//         }
//         if (!subject) {
//             newErrors.subject = 'Subject is required';
//         }
//         if (!message) {
//             newErrors.message = 'Message is required';
//         }
//         return newErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newErrors = validate();
//         if (Object.keys(newErrors).length === 0) {
//             toast.success('Your message has been sent successfully!');
//             // Perform contact form submission logic here
//         } else {
//             setErrors(newErrors);
//         }
//     };

//     return (
//         <div className='min-h-screen  flex items-start justify-center'>
//             <ToastContainer />
//             <Card className="w-full max-w-md shadow-xl rounded-xl">
//                 <CardHeader className="p-4 text-center border-b">
//                     <CardTitle className="text-5xl font-semibold text-gray-800">Contact Us</CardTitle>
//                     <CardDescription className="mt-1 text-base text-gray-600">
//                         We would love to hear from you. Please fill out the form below.
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
//                                 <Label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</Label>
//                                 <Input
//                                     id="subject"
//                                     type="text"
//                                     value={subject}
//                                     onChange={(e) => setSubject(e.target.value)}
//                                     placeholder="Subject"
//                                     className={`mt-1 block w-full p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                 />
//                                 {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
//                             </div>
//                             <div>
//                                 <Label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</Label>
//                                 <textarea
//                                     id="message"
//                                     value={message}
//                                     onChange={(e) => setMessage(e.target.value)}
//                                     placeholder="Your Message"
//                                     className={`mt-1 block w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
//                                     rows="4"
//                                 />
//                                 {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//                             </div>
//                         </div>
//                     </CardContent>
//                     <CardFooter className="p-4 text-center border-t">
//                         <Button type="submit" className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
//                             Send Message
//                         </Button>
//                     </CardFooter>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default ContactUs;


import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!subject) {
            newErrors.subject = 'Subject is required';
        }
        if (!message) {
            newErrors.message = 'Message is required';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            toast.success('Your message has been sent successfully!');
            // Perform contact form submission logic here
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='min-h-screen flex items-start justify-center'>
            <ToastContainer />
            <Card className="w-full max-w-md shadow-xl rounded-xl bg-white bg-opacity-40 hover:bg-opacity-80 transition duration-300 ease-in-out transform hover:scale-500">
                <CardHeader className="p-4 text-center  border-gray-300">
                    <CardTitle className="text-5xl font-semibold text-gray-800">Contact Us</CardTitle>
                    <CardDescription className="mt-1 text-base text-gray-600">
                        We would love to hear from you. Please fill out the form below.
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
                                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</Label>
                                <Input
                                    id="subject"
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Subject"
                                    className={`mt-1 block w-full p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                            </div>
                            <div>
                                <Label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</Label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your Message"
                                    className={`mt-1 block w-full p-2 border ${errors.message ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 bg-black`}
                                    rows="4"
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 text-center  ">
                        <Button type="submit" className="w-full py-2 bg-purple-600 text-black font-semibold rounded-lg shadow-md hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            Send Message
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default ContactUs;
