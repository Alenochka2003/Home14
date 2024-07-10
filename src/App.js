// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import User from './User';
// import UserForm from './UserForm';
// import './App.css';

// const App = () => (
//   <Provider store={store}>
//     <div className="app-container">
//       <User />
//       <UserForm />
//     </div>
//   </Provider>
// );

// export default App;

import React, { useState, useCallback, useMemo } from 'react';
import UserList from './UserList';
import './App.css';

const App = () => {
  const [filter, setFilter] = useState('');
  const userList = [
  { id: 1, name: 'John Duglas' },
    { id: 2, name: 'Jana Dinn' },
    { id: 3, name: 'Sam Smith' },
    {id: 4, name: 'Mariya Levina'}
  ];

  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter(user =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [userList]
  );

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div className="app">
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Фильтровать пользователей..."
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;