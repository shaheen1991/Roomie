
import React,{Component} from "react";
import ReactDOM from 'react-dom';
var createReactClass = require('create-react-class');



var commentData = [
    { 
      author:"Shawn Spencer",
      text:"I've heard it both ways"
    },
    { 
      author:"Burton Guster",
      text:"You hear about Pluto? That's messed up" 
    }
];
var CommentBox = createReactClass({
getInitialState: function() {
return {
data: commentData
}
},
handleCommentSubmit: function(comment) {
this.state.data.push(comment);
var comments = this.state.data;
var newComments = comments.concat([comment]);
this.setState({data: newComments});
},
render: function() {
return (
<div className="comment-box">
<CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
<CommentList data={this.state.data} />
</div>
);
}
});
var CommentList = createReactClass({
render: function() {
return (
<div className="comment-list">
{this.props.data.map(function(c){
return (
<Comment author={c.author} text={c.text} />
);
})}
</div>
);
}
});
var CommentForm = createReactClass({
handleSubmit: function(e) {
e.preventDefault();
var authorVal = e.target[0].value.trim();
var textVal = e.target[1].value.trim();
if (!textVal || !authorVal) {
return;
}
this.props.onCommentSubmit({author: authorVal, text: textVal});
e.target[0].value = '';
e.target[1].value = '';
return;
},
render: function() {
return(
<form className="comment-form form-group" onSubmit={this.handleSubmit}>
<div className="input-group">
<span className="input-group-addon">Name</span>
<input type="text" placeholder="Your name" className="form-control" />
</div>
<div className="input-group">
<span className="input-group-addon">Comment</span>
<input type="text" placeholder="Say something..." className="form-control" />
</div>
<input type="submit" value="Post" className="btn btn-primary" />
</form>
);
}
});
var Comment = createReactClass({
render: function() {
return (
<div className="comment">
<h2 className="author">{this.props.author}</h2>
{this.props.text}
</div>
);
}
});




export default CommentBox;