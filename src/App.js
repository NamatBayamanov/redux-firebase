import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadUsers } from "./redux/usersSlice";

import { loadPosts } from "./redux/postsSlice";
function App() {
  const dispatch = useDispatch();

  const users = useSelector((store) => store.users.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);



  const output = users.map((user) => <li key={user.id}>{user.name}</li>);

  

  const posts = useSelector((store) => store.posts.posts);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const outputs = posts.map((post) => <li key={post.id}>{post.title}</li>);

  return (
    <div className="App">
      <ul>{output}</ul>
      <ul>
        {outputs}
      </ul>
    </div>
  );
}

export default App;
