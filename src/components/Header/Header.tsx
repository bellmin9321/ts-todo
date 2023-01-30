import React from 'react';

function Header() {
  return (
    <div className="m-0 h-24 flex-row content-center justify-center bg-black">
      <div className="text-4xl font-bold text-yellow-300">TODO LIST</div>
      <input
        type="text"
        placeholder=" 할 일을 입력하세요"
        className="text-m mt-5 w-1/3"
      />
    </div>
  );
}

export default Header;
