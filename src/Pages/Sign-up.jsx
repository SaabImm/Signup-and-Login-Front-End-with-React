
export default function SignUpForm() {
  return (
    <div className="bg-[#f6f6f6] min-h-screen flex items-start justify-center pt-[150px] font-verdana">
      <div className="w-[37%] bg-[#f2f2f2] p-4 pb-6 rounded-md shadow-[0_4px_8px_rgba(0,0,0,0.2),_0_6px_20px_rgba(0,0,0,0.19)]">
        <form>
          <h2 className="mt-2 text-center font-normal text-[#2b2b2b] text-2xl">Sign-Up</h2>

          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Name.."
            className="block w-full my-2 mt-3 p-2.5 px-4 rounded-sm border border-[#696969] hover:border-pink-300 hover:bg-[linen] hover:text-[#464646] focus:outline-[2px] focus:outline-pink-300 focus:border-transparent"
          />

          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Lastname.."
            className="block w-full my-2 p-2.5 px-4 rounded-sm border border-[#696969] hover:border-pink-300 hover:bg-[linen] hover:text-[#464646] focus:outline-[2px] focus:outline-pink-300 focus:border-transparent"
          />

          <input
            type="tel"
            placeholder="Phone number.."
            className="block w-full my-2 p-2.5 px-4 rounded-sm border border-[#696969] hover:border-pink-300 hover:bg-[linen] hover:text-[#464646] focus:outline-[2px] focus:outline-pink-300 focus:border-transparent"
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail.."
            className="block w-full my-2 p-2.5 px-4 rounded-sm border border-[#696969] hover:border-pink-300 hover:bg-[linen] hover:text-[#464646] focus:outline-[2px] focus:outline-pink-300 focus:border-transparent"
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password.."
            className="block w-full my-2 p-2.5 px-4 rounded-sm border border-[#696969] hover:border-pink-300 hover:bg-[linen] hover:text-[#464646] focus:outline-[2px] focus:outline-pink-300 focus:border-transparent"
          />

          <input
            type="submit"
            id="button"
            value="Submit"
            className="block w-full mt-3 py-2 text-lg text-[#4CAF50] bg-white opacity-90 border-2 border-[#4CAF50] rounded-sm cursor-pointer hover:bg-[#4CAF50] hover:text-white transition-all"
          />
        </form>
      </div>
    </div>
  );
}
