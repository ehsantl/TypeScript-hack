import React, {useRef, useState} from 'react';

interface Component1Props {
  label?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Movie {
    title: string;
    date: string;
}

const Component1 = (props: Component1Props) => {
    const {label, handleChange} = props;

    const [count, setCount] = useState<Number | null>(0);
    const increment = () => {
        setCount(Number(count) + 1);
    }
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    
    return (
      <div ref={divRef}>
        <p>
          {label || "default"} {count}
        </p>
        <p>
          <input ref={inputRef} onChange={handleChange} />
        </p>
        <button onClick={increment}>Click</button>
      </div>
    );
};

export default Component1