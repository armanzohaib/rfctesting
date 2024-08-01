"use client";
import { useState } from "react";
import Landing from "./components/Landing";
import More from "./components/More";
import { Footer, Header } from "@/components/ui";
import Friends from "./components/Friends";
import WalletPage from "./components/WalletPage";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "@/app/redux/slices/userSlice";
import Loading from "./components/Loading";
// import Alert from './components/Alert'
const Home = () => {
  const [selected, setSelected] = useState("Home");
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  console.log(user, 'user home');

  return (
    <>
      <Header />
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
     
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
     
    </>
  );
};

export default Home;
