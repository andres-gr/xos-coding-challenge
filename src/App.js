import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(result => {
        setPosts(result)
      })
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(result => {
        setUsers(result)
      })
  }, [])

  const getUserName = userId => {
    const user = users.find(({ id }) => id === userId)

    if (user) {
      return user.name
    }

    return ''
  }

  return (
    <div className="App">
      <div style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: '3rem'
      }}>
        { posts.map(({
          id,
          userId,
          title,
          body,
        }) => (
          <div key={id} style={{
            marginBottom: '1rem'
          }}>
            <span style={{display: 'block'}}>{ title }</span>
            <span style={{display: 'block'}}>{ body }</span>
            <span style={{display: 'block'}}>{ getUserName(userId) }</span>
          </div>
        )) }
      </div>
    </div>
  );
}

export default App;
