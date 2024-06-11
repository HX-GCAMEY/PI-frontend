import SiginForm from "@/components/signin";
import SignupForm from "@/components/signup";

function AuthPage() {
  return (
    <div className="flex flex-col md:flex-row md:self-center min-w-full md:items-center md:justify-evenly h-4/5 my-44">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-center">Sign up</h2>
        <SignupForm />
      </div>
      <div className="border-l-2 border-blue-600 self-stretch"></div>
      <div className="flex-1 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold text-center">Sign up</h2>
        <SiginForm />
      </div>
    </div>
  );
}

export default AuthPage;
