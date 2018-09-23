
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
        };
    }
    componentDidMount(){

        fetch('/api/v1/breeds.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ breeds: data }) });
    }
    render(){
        return(
            <div>
                <AllBreeds breeds={this.state.breeds} />
            </div>
        )
    }
}