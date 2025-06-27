import { Component } from "react"
import CommentItem from "../CommentItem"
import {v4 as uuidv4} from 'uuid'
import './index.css'


const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

    const intialcommentsList=[{
    id: uuidv4(),
    name: 'Praveen',
    comment: 'Excited to learn React 4.0 tech!',
    isLiked: true,
    color: initialContainerBackgroundClassNames[0],
  },
  {
    id: uuidv4(),
    name: 'Aditi',
    comment: 'Component reusability is a game-changer.',
    isLiked: false,
    color: initialContainerBackgroundClassNames[2],
  },
  {
    id: uuidv4(),
    name: 'Vamsi',
    comment: 'JSX feels like magic once you get used to it!',
    isLiked: true,
    color: initialContainerBackgroundClassNames[4],
  },
  {
    id: uuidv4(),
    name: 'Rekha',
    comment: 'Using hooks made my logic 10x cleaner.',
    isLiked: false,
    color: initialContainerBackgroundClassNames[1],
  },
  {
    id: uuidv4(),
    name: 'Arjun',
    comment: 'Shifting from class components to functional — love it!',
    isLiked: false,
    color: initialContainerBackgroundClassNames[5],
  },]


class Comments extends Component{
    state={
        commentsList:intialcommentsList,
        name:'',
        comment:''
    }

   onsubmit=event=>{
    const index=Math.ceil(Math.random()*7)
    const color = initialContainerBackgroundClassNames[index]
    event.preventDefault()
    const newComment={
        id:uuidv4(),
        name:this.state.name,
        comment:this.state.comment,
        isLiked:false,
        color,

    }
    this.setState(prevState=>({
        commentsList:[...prevState.commentsList,newComment],
        name:'',
        comment:''
    }))
   } 
onchangeName=(event)=>{
    this.setState({name:event.target.value})
}
onchangeComment=(event)=>{
    this.setState({comment:event.target.value})
}

onDeleteClicked=(id)=>{
    const {commentsList}=this.state
    const newCommentList=commentsList.filter(each=>(
        each.id!==id


    ))
    this.setState({commentsList:newCommentList})
}

isToggelFavorite=(id)=>{
const {commentsList}=this.state
const newCommentsList=commentsList.map(each=>{
    if(each.id===id){
        return {...each,isLiked:!each.isLiked}

    }
    return each
})
this.setState({commentsList:newCommentsList})
}


    render(){
        const{commentsList}=this.state
        const {name,comment}=this.state
        return(
            <div className="container">


                <div className="upperSection">


                    <div className="text-section">

                    <div className="heading">
                        <h1 className="headingEl">Comments</h1>

                    </div>

                    <div className="text">
                        <p className="description">Say something about 4.0 Technologies</p>

                    </div>



                    <form onSubmit={this.onsubmit}>
                        <input onChange={this.onchangeName} value={name}  type="input" placeholder="Enter Name" className="inputEl"/>
                        <textarea value={comment} onChange={this.onchangeComment}  placeholder="Your Comment">

                        </textarea >

                        <button className="button" type="submit">
                        Add Comment
                        </button>

                        

                    </form>

                    </div>



                    <div className="imagecontainer">

                        <img className="image" src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"/>
                        
                    </div>



                </div>
                <div className="bottomSection">

                    <h1 className="commentsLength">{commentsList.length} Comments</h1>


                    <ul className="comments-list">
                        {commentsList.map(each=>(
                            <CommentItem
                            toggelIsFavourite={this.isToggelFavorite}
                            onClick={this.onDeleteClicked}
                            key={each.id}
                            commentDetails={each}/>
                        ))}


                    </ul>

                </div>



            </div>
        )
    }
}
export default Comments