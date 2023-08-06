import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex gap-5 justify-center max-lg:hidden">
      <button className="prev">
        <i className="fa-fa-angle-left"></i>
      </button>

      <div className="flex gap-5">
        <Button name="All" />
        <Button name="Gaming" />
        <Button name="Songs" />
        <Button name="Live" />
        <Button name="Cricket" />
        <Button name="BGMI" />
        <Button name="News" />
        <Button name="Cooking" />
      </div>
    </div>
  );
};

export default ButtonList;
