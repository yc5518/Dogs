const AllComment = (props) => {
    var Comments = props.breeds.map((comment) => {
        return(
            <div key={comment.id}>
                <h1>{comment.breed_id}</h1>
                <p>{comment.content}</p>
                <p>{comment.creator}</p>
                <p>{comment.reply_to}</p>
            </div>
        )
    })
    return(
        <div>
            {Comments}
        </div>
    )
}