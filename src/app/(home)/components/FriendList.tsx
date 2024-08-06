import Search from "@/components/common/Icons/Search";
import ImageComponent from "@/components/common/ImageComponent.tsx";
import { userService } from "@/services/user.service";
import React, { useEffect, useState } from "react";

interface IProps {
  setFriends: Function;
}
export default function FriendList({ setFriends }: IProps) {
  const [friendsData, setFriendsData] = useState<any>({});
  /**
   * fetch friends
   */
  const fetchFriendsList = async () => {
    try {
      const friends = await userService.getFriendsList();
      if (friends.status == 200) setFriendsData(friends?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFriendsList();
  }, []);

  return (
    <>
      <p className="pb-4 text-2xl">Friends ({friendsData?.friends?.length})</p>
      <div className="flex items-center gap-3">
        <div className="bg bg-cover py-3 px-5 w-full flex flex-col items-center justify-center gap-2.5 border-borderColor border rounded-[20px]">
          <p className="text-xs font-medium whitespace-nowrap">Level 1</p>
          <h2 className="text-2xl font-medium">{friendsData?.level1 || 0}</h2>
        </div>
        <div className="bg bg-cover py-3 px-5 w-full flex flex-col items-center justify-center gap-2.5 border-borderColor border rounded-[20px]">
          <p className="text-xs font-medium whitespace-nowrap">Level 2</p>
          <h2 className="text-2xl font-medium">{friendsData?.level2 || 0}</h2>
        </div>
        <div className="bg bg-cover py-3 px-5 w-full flex flex-col items-center justify-center gap-2.5 border-borderColor border rounded-[20px]">
          <p className="text-xs font-medium whitespace-nowrap">Level 3</p>
          <h2 className="text-2xl font-medium">{friendsData?.level3 || 0}</h2>
        </div>
      </div>

      <div className="overflow-x-auto AtScrollHide mt-4">
        <table className="min-w-full text-white">
          <thead>
            <tr>
              <th className="py-2 border-b border-borderColor text-lg font-medium">
                Lv.
              </th>
              <th className="py-2 border-b border-borderColor text-lg font-medium">
                Name
              </th>
              <th className="py-2 px-4 border-b border-borderColor text-lg font-medium">
                Reward
              </th>
              <th className="py-2 px- border-b border-borderColor text-lg font-medium whitespace-nowrap">
                Mining Power
              </th>
            </tr>
          </thead>
          <tbody>
            {friendsData?.friends?.length &&
              friendsData?.friends?.map((friend: any, index: number) => {
                return (
                  <tr
                    id={`friends-${index}`}
                    className="border-b border-borderColor text-white"
                  >
                    <td className="py-2 px-6 font-medium">
                      <div className="flex justify-center items-center ">
                        {friend?.level}
                      </div>
                    </td>
                    <td className="py-2 px-4 font-medium ">
                      <div className="flex justify-center items-center">
                        {friend?.firstName}
                      </div>
                    </td>
                    <td className="py-2 px-4 font-medium">
                      <div className="flex items-center justify-end gap-1.5">
                        {friend?.rewards}
                        <ImageComponent
                          src="/assets/images/RFC-Coin.svg"
                          figClassName=""
                          width={30}
                          height={35}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="py-2 font-medium">
                      <div className="flex items-center justify-center gap-1.5">
                        {friend?.minigPower} MH/s
                        <ImageComponent
                          src="/assets/images/Lightning.svg"
                          figClassName=""
                          width={17}
                          height={30}
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* <div className="flex flex-col justify-center items-center gap-5 min-h-[calc(100vh-300px)]">
        <Search />
        <p className="font-normal text-sm text-[#B0B0B0]">
          You have no friends yet.....
        </p>
        <p
          className="font-normal text-sm text-primary"
          onClick={() => setFriends(false)}
        >
          Go back
        </p>
      </div> */}
    </>
  );
}
