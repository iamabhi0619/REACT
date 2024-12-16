import React from "react";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import Addfriend from "./Addfriend";
import Diversity1Icon from "@mui/icons-material/Diversity1";

function UserProfileCard({ userid, name, isvarified, time, gender }) {
  let onAddfriend = () => {
    alert(`You are going to add Friend ${name}`);
  };
  let onVarified = () => {
    alert(`Follow ${name}`);
  };
  return (
    <div
      className={`w-80 ${
        isvarified ? "bg-green-800" : "bg-sky-900"
      } flex p-1 pr-3 justify-between items-center rounded-md text-white m-2`}
    >
      <div>
        <img
          src={`https://avatar.iran.liara.run/public/${gender}?username=${userid}`}
          alt="profilephoto"
          className="w-20  border-2 border-solid p-1 rounded-full"
        />
      </div>
      <div className="flex flex-col ">
        <p className="flex items-center justify-between">
          {name} {isvarified ? <VerifiedRoundedIcon /> : null}
        </p>
        <p>Joined {time} years ago</p>
      </div>
      <div>
        {isvarified ? (
          <Diversity1Icon onClick={onVarified} />
        ) : (
          <Addfriend onClick={onAddfriend} />
        )}
      </div>
    </div>
  );
}

export default UserProfileCard;
