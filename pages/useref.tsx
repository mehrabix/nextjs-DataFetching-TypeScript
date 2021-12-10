import { useEffect, useRef,useState} from "react";

export default function UseRef() {

    const inputRef = useRef<HTMLInputElement>(null);
    const renders = useRef(0);
    return (
      <>
        <input
          onChange={() => console.log(`Hello Renders ${renders.current++}`)}
          className="border border-black"
          ref={inputRef}
          type="text"
        />
        <button
          className="border border-black"
          onClick={() => {
            if (inputRef.current) {
              console.log(inputRef);
              console.log(inputRef.current);
              console.log(inputRef.current.value);
              inputRef.current.focus();
            }
          }}
        >
          Focus the input
        </button>
      </>
    );


}

