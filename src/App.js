import React, { Component } from 'react';
import axios from 'axios'

class Reddit extends Component {
  state = {
    posts: [],
    author: "",
    score: null
  }

  componentDidMount() {
    axios.get('https://www.reddit.com/r/reactjs.json')
    .then(res => {
      const posts = res.data.data.children.map( obj => obj.data);
      this.setState({ posts })
    })
  }
      
  render() {
    const { posts } = this.state;
    
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}><a>{post.score} - <strong>{post.title}</strong></a> by {post.author}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Reddit;
