import React from "react";
interface Iprops {
  name: string;
  email: string;
  handleRemove:(email:string)=>void
}

const Contact = ({name,email,handleRemove}: Iprops) => {
  return (
    <div>
      <strong>
        <h1>{name}</h1>
      </strong>
      <strong>
        <h1>{email}</h1>
      </strong>
      <button onClick={()=>handleRemove(email)}>remove</button>
    </div>
  );
};

export default Contact;
