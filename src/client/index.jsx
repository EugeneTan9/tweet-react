import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets.js';

class App extends React.Component {
  render() {
    console.log(tweets);
    let alltweets = tweets.map(tweets=>{
        return (
            <div>
                <p>{tweets.created_at}</p>
                <p>{tweets.id}</p>
                <p>{tweets.text}</p>
                <p>Likes: {tweets.favorite_count}</p>
            </div>
        );
    })
    return (
      <div>
        <h1>Tweets</h1>
        {alltweets}
      </div>
    );
  }
}



const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");