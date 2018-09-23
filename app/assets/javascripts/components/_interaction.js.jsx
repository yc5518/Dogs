class Interaction extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Like likes={this.props.breed.likes}/>
                <h3>Comments:</h3>
                <Comment id={this.props.breed.id}/>
            </div>
        )
    }
}