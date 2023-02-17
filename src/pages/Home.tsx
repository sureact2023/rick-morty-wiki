import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  return (
    <div className="container text-center fs-3">
      {isAuthenticated
      // @ts-ignore
        ? `welcome ${user.nickname} to the Rick & Morty Wiki`
        : "please login first to see our app"}
    </div>
  );
};

export default Home;
