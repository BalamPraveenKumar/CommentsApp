import "./index.css"
const CommentItem=(props)=>{
    const {commentDetails,toggelIsFavourite,onClick}=props
    const {id,name,comment,isLiked,color}=commentDetails

     const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
     
    const clicked=()=>{
        onClick(id);
    }

const toggleclicked=()=>{
    toggelIsFavourite(id)
}

    return(

        <li className="commentItem">
            <div className="firstsection">
                <div className={`log ${color}`}>
                   <p>{name[0]}</p>
                </div>


                <div className="namesection">
                    <div className="name">
                        <p>{name}</p>
                    <p className="time">less than a minute ago</p>

                    </div>
                    <div className="comment">
                         <p>{comment}</p>



                    </div>

               
              
                </div>

            </div>


            <div className="bottomsection">
                <div className="like-div">

                                <div className="likeimage">

                        <img   alt="like"  src={imageUrl} />

                                </div>

                        <div className="likebutton">

                        <button onClick={toggleclicked}  className="button">
                        Like
                        </button>
                       </div>
                </div>

                <div className="delete-icon">


                    <button onClick={clicked}  data-testid="delete">
                        <img
                        alt="delete"
                        className="delete"
                        src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                        />
                    </button>
                </div>



            </div>



        </li>
    )
}

export default CommentItem