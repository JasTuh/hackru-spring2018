import React from 'react';

export default function Login() {
  return (
    <div>
      <form action="/login">
        <button className="welcomeLoginButton btn-lg btn btn-primary" action="/login"> Login </button>
      </form>
    </div>
  );
}
