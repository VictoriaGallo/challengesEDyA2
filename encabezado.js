const Header = ({ todos }) => {
    const pendingTodos = todos.filter(todo => !todo.done).length;
  
    return (
      <h1>
        TodoApp: 10, <small>Pendientes: {pendingTodos}</small>
      </h1>
    );
  };
  
  export default Header;
