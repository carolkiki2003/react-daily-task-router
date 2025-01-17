import './App.css';
import {
  HashRouter,
  NavLink,
  useNavigate,
  useParams,
  Route,
  Routes,
  Outlet
} from 'react-router-dom';

const Todo = () => {
  return (<>
    <p>這是 Todo 頁面</p>
    <Logout/>
    </>)
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Logout = () => {
  let navigate = useNavigate()
  return <button onClick={()=>{navigate('/login')}}>登出</button>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return (<>
    <p>Post頁面</p>
      <Outlet/>
    </>)
};

const PostId = () => {
  let params = useParams();
  return (<>
    <p>Post ID : {params.postId}</p>
    </>)
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
         <Routes>
          <Route path="/"/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/todo" element={<Todo />}/>
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
