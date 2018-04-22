import React from 'react';

export default function Listen(props) {
  return (
    <div>
      <form>
        <button className="welcomeLoginButton btn-lg btn btn-primary" action={props.url}> Listen now </button>
        <button className="welcomeLoginButton btn-lg btn btn-primary" action='/'> Merge more </button>
      </form>
    </div>
  );
}
