import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError('Please check your email');
    } else {
      setError('');
      console.log('Email submitted:', email);
    }
  };

  return (
    <div >
        <div className="flex items-center gap-[16px]" >
        <div className="flex flex-col w-[320px]">
        <input
          type="email"
          placeholder="Enter your email…"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="text-white font-raleway text-sm font-bold w-[200px] h-[45px] flex-shrink-0 bg-[#2F65F8] filter drop-shadow-[2px_3px_6px_rgba(0,_0,_0,_0.16)]"
      >
        Get Started
      </button>
        </div>
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

    </div>
  );
};

export default EmailForm;
