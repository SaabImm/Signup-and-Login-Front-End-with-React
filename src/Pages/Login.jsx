import {React, useState} from "react";
import Title from '../Components/Title'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email:"",
    password: ""
    });
  const handleChange = (e)=>{
    e.preventDefault();
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    });
}

  const handleSubmit =async (e)=> {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:3000/auth/login" ,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(formData)
      });
      console.log(response.json())
    }
    catch (error) {
      console.error("Erreur réseau :", error);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10 font-[Orbitron] border border-t-4 border-b-4 py-10">
            <div className="flex flex-col justify-center items-center ">
            <Title title={'Welcome back to EasyShop '}/>
            <p>Log In and discover world-class products.</p>
            </div>
      <div className="w-full max-w-md bg-gradient-to-br from-[#334A4F] to-[#5b8b96] backdrop-blur-md border-[2px] border-yellow-500/40 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8 tracking-wide">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="E-mail.."
            name="email"
            onChange={handleChange}
            className="w-full p-3 bg-[#334A4F]/60 text-white placeholder-gray-400 border border-yellow-500/40 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <input
            type="password"
            placeholder="Password.."
            name="password"
            onChange={handleChange}
            className="w-full p-3 bg-[#334A4F]/60 text-white placeholder-gray-400 border border-yellow-500/40 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-yellow-400 border-2 border-yellow-400 rounded-md bg-transparent hover:bg-yellow-400 hover:text-blue-950 transition-all duration-300"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="text-center">
        By continuing, you agree to our Terms and Privacy Policy. <br /> 
        You don't have an account? <a href="/signup">Sign Up</a>
    </div>
    </div>
  );
};

export default LoginForm;
