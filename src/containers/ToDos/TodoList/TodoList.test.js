import React from "react";
import TodoList from "./index";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Todo from "../Todo";

configure({
  adapter: new Adapter(),
});

const todos = [
  { id: 0, title: "Test todo1", from: "a@gmail.com", isDone: false },
  { id: 1, title: "Test todo2", from: "a@gmail.com", isDone: false },
  { id: 2, title: "Test todo3", from: "a@gmail.com", isDone: false },
];

describe("<TodoList/>", () => {
  it("should render exact number of props.todos", () => {
    const component = shallow(<TodoList todos={todos} />);
    expect(component.find(Todo)).toHaveLength(todos.length);
  });

  it("should test", () => {
    expect(true).toBeTruthy();
  });
});
