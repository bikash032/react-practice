import { useState } from "react";
import { greetingMessage } from "../../utilities/helpers";

export const LeftSection = () => {
  const [data] = useState(
"MeroJhola is your one-stop e-commerce platform, bringing you a seamless and convenient shopping experience right at your fingertips.  Shop smart, shop with confidence – only at MeroJhola! "  );
  return (
    <div className="w-full md:w-1/2 bg-teal-900 text-white p-6 flex flex-col justify-center rounded-t-lg md:rounded-l-lg md:rounded-t-none">
      <img
        src="https://t4.ftcdn.net/jpg/01/72/59/13/240_F_172591390_FY59Mu6nS3CynwFTTH0xtTOOHfT9vbm0.jpg"
        alt=""
        className=""
      />
      <h1 className="text-2xl font-bold mx-30">Welcome!!!</h1>
      <h2 className="text-lg mt-2 font-bold text-amber-500  ">
        <marquee behavior="" direction="">
          {greetingMessage()}
        </marquee>
      </h2>
      <p className="mt-4 text-sm">{data}</p>
    </div>
  );
};
