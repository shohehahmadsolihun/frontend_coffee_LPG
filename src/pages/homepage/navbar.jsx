import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika pengguna mengonfirmasi logout
        localStorage.removeItem("token");
        window.location.reload(); // Refresh halaman setelah logout
        Swal.fire(
          "Logged Out!",
          "You have successfully logged out.",
          "success"
        );
      }
    });
  };

  return (
    <div className="sticky z-[9999] border-b border-slate-500 bg-white shadow-lg top-0">
      <div className="flex items-center justify-between h-32 text-lg z-[99]">
        <div className="flex-[2] flex items-center justify-center">
          <div className="mr-2 cursor-pointer">
            <img src="/assets/img/coffee-logo.png" alt="Coffee LpG Logo" />
          </div>
          <Link to="/" className="text-lg font-bold select-none">
            Coffee LpG
          </Link>
        </div>
        <div
          className="flex-[6] flex items-stretch justify-center list-none m-5
          cursor-pointer text-base font-bold text-slate-500 gap-8"
        >
          <Link to="/" className="hover:text-amber-800">
            Home
          </Link>
          <Link to="/product" className="hover:text-amber-800">
            Product
          </Link>
          <li className="hover:text-amber-800">Your Chart</li>
          <li className="hover:text-amber-800">History</li>
        </div>
        {isLogin ? (
          <div
            onClick={() => setShow(!show)}
            className="rounded-full h-14 w-14 flex bg-yellow-500 p-2 items-center justify-center cursor-pointer text-center mx-20 duration-200"
          >
            {show && (
              <div className="absolute flex flex-col p-4  bg-white gap-4 shadow-md right-28 top-20 rounded-md">
                <div className="text-sm font-semibold">
                  <Link to="/profile">Profile</Link>
                </div>
                <div className="border-b border-slate-300"></div>
                <div
                  onClick={handleLogout}
                  className="text-sm font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-[3] flex items-center justify-evenly">
            <div className="text-base font-semibold cursor-pointer">
              <Link to="/login">Login</Link>
            </div>
            <div
              className="flex items-center justify-center text-base font-semibold
            cursor-pointer bg-yellow-500 rounded-lg w-[30%] p-[3%]"
            >
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
