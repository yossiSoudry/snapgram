import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ):(
        <>
        <section className="flex flex-1 justify-center items-center flex-col p-10">
          <Outlet />
        </section>
        <img 
        src="assets/images/side-img.svg"
        alt="Logo"
        className="hidden xl:block bg-no-repeat object-cover w-1/2"
        />
        </>
      )}
    </>
  )
}

export default AuthLayout