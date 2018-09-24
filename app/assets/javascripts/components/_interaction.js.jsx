class Interaction extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Like breed={this.props.breed}/>
                <h4>Comments:</h4>
                <Comment id={this.props.breed.id}/>
            </div>
        )
    }
}