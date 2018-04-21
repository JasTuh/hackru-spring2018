import React from 'react';

export default function Login() {
  return (
    <div>
      <form action="/login">
        <button className="welcomeLoginButton btn-lg" action="/login"> Login! </button>
      </form>
    </div>
  );
}
