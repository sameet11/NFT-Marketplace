import Image from "next/image";

import EmailSignin from "@/components/Emailsign";
import GoogleSignin from "@/components/Googlesignin";
const Login = () => {
  return (
    <div className="h-full w-full text-center text-white">
      <div className="w-full mt-5">
        <Image
          src="/coinvise-logo.png"
          alt="Description of your image"
          width={50}
          height={50}
          className="rounded-full mx-auto"
        />
      </div>
      <div className="mt-28">
        <h1 className="font-bold text-3xl">Welcome Back</h1>
      </div>
      <EmailSignin />
      <div className="text-center my-8">
        <div className="inline-block px-3 relative top-3">OR</div>
        <div className="border-t border-solid border-gray-400 w-1/5 mx-auto"></div>
      </div>
      <GoogleSignin />
    </div>
  );
};
export default Login;
