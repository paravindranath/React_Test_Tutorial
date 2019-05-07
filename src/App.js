import React from 'react'
import CommentCard from "./components/CommentCard";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import Comments from "./screens/Comments";

class App extends React.Component{
    render () {
        return (
            <div className="App">
            <Comments/>
            </div>
        );
  }
}
export default App;