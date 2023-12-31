import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hock/UseAuth";
import Swal from "sweetalert2";

const SocialSingIn = () => {
  const { singInWithGoogle, singInWithGithub } = UseAuth();
  const navigate = useNavigate();
  const loc = useLocation();
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        navigate(loc.state ? loc.state : "/");
        Swal.fire({
          title: "LogIn",
          text: "Login successfully",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Oops!!",
          text: "Something went wrong",
          icon: "error",
        });
      });
  };
  return (
    <div>
      <button
        onClick={() => handleSocialLogin(singInWithGoogle)}
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-blue-500 font-medium bg-white text-blue-600 shadow-sm align-middle hover:bg-blue-500 hover:text-white"
      >
        Sing in with Google
      </button>
      <button
        onClick={() => handleSocialLogin(singInWithGithub)}
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-blue-500 font-medium bg-white text-blue-600 shadow-sm align-middle hover:bg-blue-500 hover:text-white mt-3"
      >
        Sing in with Github
      </button>
      <div className="flex items-center my-5">
        <div className="bg-blue-600 h-[2px] w-full"></div>
        <h1 className="text-xl">OR</h1>
        <div className="bg-blue-600 h-[2px] w-full"></div>
      </div>
    </div>
  );
};

export default SocialSingIn;
