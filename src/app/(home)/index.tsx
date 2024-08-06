"use client";
import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import More from "./components/More";
import { Footer, Header } from "@/components/ui";
import Friends from "./components/Friends";
import WalletPage from "./components/WalletPage";
import Loading from "./components/Loading";
// import Alert from './components/Alert'
import { HttpService } from "@/services/base.service";
import { authService } from "@/services/auth.telegram";
import { useDispatch, useSelector } from "react-redux";
import { loginUpdate, selectUserData } from "@/app/redux/slices/userSlice";

declare global {
  interface Window {
    Telegram: any;
  }
}
const Home = () => {
  const [selected, setSelected] = useState("Home");
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.Telegram.WebApp.initData && !user) {
        fetchUser(window.Telegram.WebApp.initData);
      }
    }
  }, []);

  /**
   * authorize user from telegram using out backend
   * @param userData
   */
  const fetchUser = async (userData: any) => {
    try {
      const user = await authService.authenticateUser({ userData });
      if (user?.data.success) {
        dispatch(loginUpdate(user?.data.user));
        if (user?.data.user.access_token)
          HttpService.setToken(user?.data.user.access_token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
      {user ? (
        <>
          <div className="min-h-[calc(100vh-176px)]">
            {selected === "Home" ? (
              <div className="px-5 py-2">
                <Landing />
              </div>
            ) : selected === "More" ? (
              <More />
            ) : selected === "Friends" ? (
              <div className="px-5 py-4">
                <Friends />
              </div>
            ) : (
              <div className="px-5 py-2.5">
                <WalletPage />
              </div>
            )}
          </div>
          <Footer selected={selected} setSelected={setSelected} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
