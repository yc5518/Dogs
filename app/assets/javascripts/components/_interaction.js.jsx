class Interaction extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Like breed={this.props.breed}/>
                <h3>Comments:</h3>
                <Comment id={this.props.breed.id}/>
            </div>
        )
    }
}