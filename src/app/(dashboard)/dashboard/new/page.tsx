import React from "react";
import CreateForm from "@/src/components/(dashboard)/(newuser)/Create.Form";

const NewUser: React.FC = () => {
  return (
    <>
      <h1 className="text-xl font-semibold text-dark">
        Add new user to dashboard
      </h1>
      <p className="text-gray-500">Fill only required you fields.</p>
      <div className="mt-2 flex">
        <CreateForm />
      </div>
    </>
  );
};

export default NewUser;
