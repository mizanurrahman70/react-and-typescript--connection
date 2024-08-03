import React from "react";
interface Iprops {
  name: string;
  email: string;
}

const Contact = (props: Iprops) => {
  return (
    <div>
      <strong>
        <h1>{props.name}</h1>
      </strong>
      <strong>
        <h1>{props.email}</h1>
      </strong>
    </div>
  );
};

export default Contact;
