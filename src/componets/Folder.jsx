import React, { useState } from "react";

function Folder({ data }) {
  const [expand, setExpand] = useState(false);
  if (data?.isFolder) {
    return (
      <div className=" ms-5">
        <span
          onClick={() => setExpand(!expand)}
          className=" flex w-[300px] m-1 justify-between gap-1 bg-gray-500 font-bold text-white"
        >
          <div className=" flex gap-1">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="white" d="M2 20V4h8l2 2h10v14z" />
            </svg>
            <span>{data?.name}</span>
          </div>
          {!expand&&<svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
            ></path>
          </svg>}
          {expand && <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 40 40"><path fill="white" d="M4.659 11.833h30.682L20 32.167z"></path></svg>}
        </span>
        {data?.items?.map((value) => (
          <>{expand && <Folder data={value} key={value?._id} />}</>
        ))}
      </div>
    );
  } else {
    return (
      <div className="ms-5">
        <span className=" flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              fill-rule="evenodd"
              d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828C4.343 2 6.239 2 10.03 2c.606 0 1.091 0 1.5.017c-.013.08-.02.161-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22"
              clip-rule="evenodd"
            />
            <path
              fill="black"
              d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"
            />
          </svg>
          {data?.name}
        </span>
      </div>
    );
  }
}

export default Folder;
