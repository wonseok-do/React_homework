import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="form">
        <div className="input-group">
          <p>제목</p>
          <input
            type="text"
            className="input"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <p>내용</p>
          <input
            type="text"
            className="input"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            setTodos([
              ...todos,
              { id: todos.length + 1, title: title, body: body, isDone: false },
            ]);
            setTitle("");
            setBody("");
          }}
        >
          추가하기
        </button>
      </div>
      <div className="list-container">
        <h2>Working..🔥</h2>
        <div className="todo-container">
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return (
                <div
                  className="todo-card"
                  key={todo.id}
                  onRemove={onRemove}
                  onToggle={onToggle}
                >
                  <h2>{todo.title}</h2>
                  <p>{todo.body}</p>
                  <div className="btn-group">
                    <button
                      className="del-btn"
                      onClick={() => onRemove(todo.id)}
                    >
                      삭제하기
                    </button>

                    <button
                      className="com-btn"
                      onClick={() => onToggle(todo.id)}
                    >
                      완료
                    </button>
                  </div>
                </div>
              );
            }
            return;
          })}
        </div>
        <h2>Done..!👍</h2>
        <div className="todo-container">
          {todos.map((todo) => {
            if (todo.isDone !== false) {
              return (
                <div
                  className="todo-card"
                  key={todo.id}
                  onRemove={onRemove}
                  onToggle={onToggle}
                >
                  <h2>{todo.title}</h2>
                  <p>{todo.body}</p>
                  <div className="btn-group">
                    <button
                      className="del-btn"
                      onClick={() => onRemove(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="com-btn"
                      onClick={() => onToggle(todo.id)}
                    >
                      취소
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
