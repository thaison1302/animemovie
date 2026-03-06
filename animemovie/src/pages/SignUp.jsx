import SignUpCard from "../components/signupcard";
import Infomation from "../components/info.jsx"

function SignUp() {
  const handleSignup = (formData) => {
    console.log('Form data:', formData);
    // Gửi dữ liệu lên server
  };

  const handleGoogleSignup = () => {
    console.log('Google signup');
    // Xử lý Google OAuth
  };

  const handleLoginClick = () => {
    // Chuyển hướng đến trang đăng nhập
  };

  return (
    <>
    <SignUpCard/>
    </>
    // <SignUpCard
    //   title="ĐĂNG KÝ!"
    //   googleButtonText="Đăng ký bằng Google"
    //   signupButtonText="ĐĂNG KÝ"
    //   onSignup={handleSignup}
    //   onGoogleSignup={handleGoogleSignup}
    //   onLoginClick={handleLoginClick}
    // />
  );
}

export default SignUp;