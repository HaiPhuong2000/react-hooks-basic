import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";
// import TodoList from "./components/Todo";
// import TodoForm from "./components/TodoForm";
// import ColorBox from "./components/ColorBox/ColorBox";
// import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍" },
    { id: 2, title: "We love Easy Frontend! 🥰" },
    { id: 3, title: "They love Easy Frontend! 🚀" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  //call API
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("fail to fetch post link: ", error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleTodoclick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    //clone new array
    const newTodoList = [...todoList];
    //Cắt phần 1 phần tử ở vị trí index
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoForm(formValue) {
    //add new todo to current todo list
    console.log(formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFilterChange(newFilter) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoForm} />
      <TodoList todos={todoList} onTodoClick={handleTodoclick} /> */}
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />\
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
