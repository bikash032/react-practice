import GoogleButton from "react-google-button";



type LoginParams = {
  label: any;
};
export const RightSecton = ({ label }: LoginParams) => {
  return (
    <div className="w-full border-2 border-teal-600 md:w-1/2 p-5 flex flex-col justify-center">
      <h1 className="text-xl font-extrabold text-teal-900 md:text-center">
        Login!!!
      </h1>
    <form action="">
    <div className="mt-4 flex flex-col md:flex-row">
        <label className="block text-md font-medium py-3 md:w-2/5">
          {label}
        </label>
        <input
          type="text"
          placeholder="Enter your username..."
          className="w-full border border-gray-400 rounded-md p-2 mt-1"
        />
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        <label className="block text-md font-medium py-3 md:w-2/5">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="w-full border border-gray-400 rounded-md p-2 mt-1"
        />
      </div>
      <div  className="text-sm  hover:text-teal-950  text-teal-900 italic underline flex justify-end mt-4">
          <a href="#" type="forget-password">Forget password?</a>
        </div>
      <div className="mt-3 flex  space-x-6">
        <button type="submit" className="bg-teal-800 font-bold text-white py-1 px-6 rounded-md hover:bg-teal-900 hover:cursor-pointer">
          Submit
        </button>
        <button type="reset" className="bg-red-500 font-bold text-white py-1 px-6 rounded-md hover:bg-red-600 hover:cursor-pointer">
          Cancel
        </button>
      </div>

      <div className="flex space-x-5 justify-center">
        <div className="text-sm text-black  flex space-x-1 mt-3">
          <p>Don't Have Account?</p>
         <a href="#" className="text-teal-900 text-sm italic underline">  Sign Up Here!!!</a>
        </div>
        <hr className="mt-5 text-teal-900 "/>
        
        

      </div>
      <hr className="my-4 text-teal-100 md-"/>
      <div className=" gap-2">
      <div>
        <GoogleButton className=""/>
      
      </div>
      </div>
      <div>
      </div>
    </form>
    </div>
  );
};
