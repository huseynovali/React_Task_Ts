import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { UserState, UserStateReducer } from './models/userModel';
import { fetchUser } from './Feature/User/userRedsucer';
import { useEffect } from 'react';
import { AppDispatch } from './Store/store';

function App() {
  const { userList, loading, err } = useSelector((state: UserStateReducer) => state.userReducer);

  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  console.log(userList);

  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      {err && <h1>{err}</h1>}
      {<>
        <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: 'repeat(6,1fr)', justifyContent: "space-between" }}>
          <li>ID</li>
          <li>Username</li>
          <li>Email</li>
          <li>Address</li>
          <li>Street</li>
          <li>CompanyName</li>
        </ul>
        <hr />
        {
          userList.map(
            item => (
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: 'repeat(6,1fr)', justifyContent: "space-between" }}>
                <li>{item.id}</li>
                <li>{item.username}</li>
                <li>{item.email}</li>
                <li>{item.address.city}</li>
                <li>{item.address.street}</li>
                <li>{item.company.name}</li>
              </ul>
            )
          )
        }
      </>
      }
    </div>
  );
}

export default App;
