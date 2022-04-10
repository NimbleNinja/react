import React from 'react';
import UsersList from './UsersList';

const users = [
  { name: 'Tom', age: 18, id: 'id-0' },
  { name: 'Bob', age: 16, id: 'id-1' },
  { name: 'Sam', age: 25, id: 'id-2' },
  { name: 'Rock', age: 38, id: 'id-3' },
  { name: 'Eddy', age: 28, id: 'id-4' },
];

const App = () => {
  return <UsersList users={users} />;
};

export default App;

// create all components with test data
// App => test data = [users] => render(UsersList)
// UsersList => users.map() => render User(name, age) with keys(!)
// init state in UsersList {filterText}
// realize callback from Filter =>
// users.filter(user => user.includes(filterText))
// render users, may be use conditional render
