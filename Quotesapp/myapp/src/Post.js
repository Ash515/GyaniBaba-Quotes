import React from 'react';
import './Post.css';

function Post(){
    return (
        <ul>
        <li>
        <div className="post-header"><br></br><br></br>
        <div className="post-footer"><footer>Like Dislike</footer></div>
        </div>
       
        </li>
        <li>
        <div className="post-header"><br></br><br></br>
        <div className="post-footer">Like Dislike</div>
        </div>
       
        </li>
      
        </ul>
    )
}

export default Post;