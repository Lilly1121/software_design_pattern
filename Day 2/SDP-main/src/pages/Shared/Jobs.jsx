
// import React from "react";

// import TypingAnimation from "@/components/magicui/typing-animation";
// const Jobs=()=> {
//   return (
//     <TypingAnimation
//     className="text-4xl font-bold text-black dark:text-white"

//     text="5 lakh+ jobs for you to explore ! ! ! ...."
    
//     />
    
//   );
// }
// export default Jobs;


import React, { useState } from 'react';

const Jobs = () => {
  const [formData, setFormData] = useState({
    title: '',
    salary: '',
    email: '',
    company: '',
    description: '',
    jobCategory: '',
    jobType: '',
    jobExperience: '',
    jobVacancy: '',
    jobDeadline: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.title) formErrors.title = 'Title is required';
    if (!formData.salary || isNaN(formData.salary) || Number(formData.salary) < 0) formErrors.salary = 'Valid salary is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.company) formErrors.company = 'Company is required';
    if (!formData.description) formErrors.description = 'Description is required';
    if (!formData.jobCategory) formErrors.jobCategory = 'Job category is required';
    if (!formData.jobExperience) formErrors.jobExperience = 'Job experience is required';
    if (!formData.jobVacancy || isNaN(formData.jobVacancy) || Number(formData.jobVacancy) < 1) formErrors.jobVacancy = 'Valid job vacancy is required';
    if (!formData.jobDeadline) formErrors.jobDeadline = 'Job deadline is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      // Submit form data
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Enter Job Details</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Title', name: 'title', type: 'text' },
          { label: 'Salary', name: 'salary', type: 'number' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Company', name: 'company', type: 'text' },
          { label: 'Description', name: 'description', type: 'textarea' },
          { label: 'Job Category', name: 'jobCategory', type: 'text' },
          { label: 'Job Experience', name: 'jobExperience', type: 'text' },
          { label: 'Job Vacancy', name: 'jobVacancy', type: 'number' },
          { label: 'Job Deadline', name: 'jobDeadline', type: 'date' }
        ].map((field) => (
          <div key={field.name} style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>{field.label} :</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderColor: 'blue' }}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderColor: 'blue' }}
              />
            )}
            {errors[field.name] && <span style={{ color: 'red' }}>{errors[field.name]}</span>}
          </div>
        ))}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Job Type :</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderColor: 'blue' }}
          >
            <option value="">Please Select Job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Submit</button>
      </form>
    </div>
  );
};

export default Jobs;



