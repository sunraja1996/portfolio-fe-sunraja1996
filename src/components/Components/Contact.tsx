import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiurl = import.meta.env.VITE_APIURL;

if(!apiurl){
  console.error("apiurl is not working")
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    jobRole: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
    jdDescription: "",
  });

  const handleClear = () => {
    setFormData({
      name: "",
      companyName: "",
      jobRole: "",
      email: "",
      contactNumber: "",
      subject: "",
      message: "",
      jdDescription: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${apiurl}/mail/send-email`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
      },
      withCredentials: false,
      });
  
      if (response.status === 200) {
        toast.success(`Thank you, ${formData.name}, for reaching out. I have received your inquiry regarding the job description and will respond to you shortly.`); 
        handleClear(); 
      } else {
        toast.error('Error sending email: ' + response.data.message); 
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error sending email.');
    }
  };

  return (
    <>
      <hr className="border-t-2 border-indigo-200 my-4 shadow-sm" />

      <section className="bg-white font-monserrat">
        <div className="py-8 px-4 mx-auto mb-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h2 className="mb-2 text-4xl tracking-tight font-bold text-gray-900">Hire Me</h2>
       

      <section className="bg-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Contact Information</h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Fill out the form to get in touch. All fields are required. Thank you!
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Name</label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="company-name" className="block text-sm/6 font-medium text-gray-900">Company Name</label>
                  <div className="mt-2">
                    <input
                      id="company-name"
                      name="companyName"
                      type="text"
                      placeholder="Your Company"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="contact-number" className="block text-sm/6 font-medium text-gray-900">Contact Number</label>
                  <div className="mt-2">
                    <input
                      id="contact-number"
                      name="contactNumber"
                      type="tel"
                      placeholder="(+91) 12345 67890"
                      required
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email Address</label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@domain.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                

                <div className="col-span-full">
                  <label htmlFor="job-role" className="block text-sm/6 font-medium text-gray-900">Job Role</label>
                  <div className="mt-2">
                    <input
                      id="job-role"
                      name="jobRole"
                      type="text"
                      placeholder="Software Engineer"
                      required
                      value={formData.jobRole}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="subject" className="block text-sm/6 font-medium text-gray-900">Subject</label>
                  <div className="mt-2">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject of the mail"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">Message</label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Type your message here"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">Write a detailed message about your inquiry.</p>
                </div>

                <div className="col-span-full">
                  <label htmlFor="jd-description" className="block text-sm/6 font-medium text-gray-900">Job Description (JD)</label>
                  <div className="mt-2">
                    <textarea
                      id="jd-description"
                      name="jdDescription"
                      rows={6}
                      placeholder="Provide the detailed job description"
                      value={formData.jdDescription}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
              <button
                type="button"
                onClick={handleClear}
                className="text-sm/6 font-semibold text-gray-900"
              >
                Clear
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </section>
      </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
