import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

const List: React.FC<IProps> = () => {
  return(<div>List</div>)
}

export default List