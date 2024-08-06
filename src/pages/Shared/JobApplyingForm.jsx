// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: vh;
//   background-color: ;
  
  
// `;

// const Form = styled.form`
//   width: 100%;
//   max-width: 600px;
//   padding: 20px;
//   background-color: white;
//   box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
// `;

// const Title = styled.h2`
//   text-align: center;
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 16px;
//   color:black;
// `;

// const Label = styled.label`
//   display: block;
//   color: black;
//   font-size: 14px;
//   font-weight: bold;
//   margin-bottom: 2px;
//   border-radius:4px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 8px 12px;
//   border: 1px solid black;
//   border-radius: 9px;
//   margin-bottom: 16px;
//   color:black;
//   &:focus {
//     outline: none;
//     border-color: black;
//     box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 8px 12px;
//   border: 1px solid #black;
//   border-radius: 4px;
//   margin-bottom: 16px;
//   &:focus {
//     outline: none;
//     border-color: #3182ce;
//     box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 8px 12px;
//   color:black;
//   border: 1px solid #black;
//   border-radius: 4px;
//   margin-bottom: 16px;
//   &:focus {
//     outline: none;
//     border-color: black;
//     box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px 15px;
//   background-color: black;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
//   &:hover {
//     background-color: #2b6cb0;
//   }
// `;
// const JobForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     salary: '',
//     email: '',
//     company: '',
//     description: '',
//     jobCategory: '',
//     jobType: '',
//     jobExperience: '',
//     jobVacancy: '',
//     jobDeadline: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     const missingFields = Object.entries(formData).filter(([key, value]) => value.trim() === '');

//     if (missingFields.length > 0) {
//       toast.error('Please fill out all fields before submitting.');
//       return;
//     }
//     console.log(formData);
//     toast.success('Successfully registered!');
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Title>Enter Job Details</Title>
//         <div>
//           <Label>Name:</Label>
//           <Input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Enter Your name"
//           />
//         <div>
//           <Label>Email:</Label>
//           <Input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email to be contacted for this job"
//           />
//         </div>
//         </div>
//         <div>
//           <Label>Salary:</Label>
//           <Input
//             type="text"
//             name="salary"
//             value={formData.salary}
//             onChange={handleChange}
//             placeholder="Enter your salary Expectation for this job"
//           />
//         </div>
//         <div>
//           <Label>Company:</Label>
//           <Input
//             type="text"
//             name="company"
//             value={formData.company}
//             onChange={handleChange}
//             placeholder="Enter company of job"
//           />
//         </div>
//         <div>
//           <Label>Job Type:</Label>
//           <Select
//             name="jobType"
//             value={formData.jobType}
//             onChange={handleChange}
//           >
//             <option value="">Please select job type</option>
//             <option value="Full-time">Full-time</option>
//             <option value="Part-time">Part-time</option>
//             <option value="Contract">Contract</option>
//           </Select>
//         </div>
//         <div>
//           <Label>Job Category:</Label>
//           <Input
//             type="text"
//             name="jobCategory"
//             value={formData.jobCategory}
//             onChange={handleChange}
//             placeholder="Enter category of job"
//           />
//         </div>
      
//         <Button type="submit">Submit</Button>
//         <ToastContainer />
//       </Form>
//     </Container>
//   );
// };

// export default JobForm;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  min-height: 100vh; /* Fixed */
  background-color: #f0f0f0; /* Example background color */
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  min-height:40px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: black;
`;

const Label = styled.label`
  display: block;
  color: black;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2px;
  border-radius: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 4px; /* Updated */
  margin-bottom: 16px;
  color: black;
  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  color: black;
  border: 1px solid black; /* Fixed */
  border-radius: 4px;
  margin-bottom: 16px;
  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #2b6cb0;
  }
`;

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    salary: '',
    email: '',
    company: '',
    jobCategory: '',
    jobType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = Object.entries(formData).filter(([key, value]) => value.trim() === '');

    if (missingFields.length > 0) {
      toast.error('Please fill out all fields before submitting.');
      return;
    }
  // useEffect(() => {
  //   const allFieldsFilled = Object.values(formData).every(value => value.trim() === '');
    
  //   if (allFieldsFilled) {
  //     toast.success('Successfully registered! Waiting for confirmation.');
  //   }
  // }, [formData]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const missingFields = Object.entries(formData).filter(([key, value]) => value.trim() === '');

  //   if (missingFields.length > 0) {
  //     toast.error('Please fill out all fields before submitting.');
  //     return;
  //   }

    console.log(formData);
    toast.success('Successfully registered! Waiting for confirmation.');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Enter Job Details</Title>
        <div>
          <Label htmlFor="title">Name:</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Your name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email to be contacted for this job"
          />
        </div>
        <div>
          <Label htmlFor="salary">Salary:</Label>
          <Input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter your salary Expectation for this job"
          />
        </div>
        <div>
          <Label htmlFor="company">Company:</Label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company of job"
          />
        </div>
        <div>
          <Label htmlFor="jobType">Job Type:</Label>
          <Select
            id="jobType"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Please select job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="jobCategory">Job Category:</Label>
          <Input
            type="text"
            id="jobCategory"
            name="jobCategory"
            value={formData.jobCategory}
            onChange={handleChange}
            placeholder="Enter category of job"
          />
        </div>
        <Button type="submit">Submit</Button>
        <ToastContainer />
      </Form>
    </Container>
  );
};

export default JobForm;
