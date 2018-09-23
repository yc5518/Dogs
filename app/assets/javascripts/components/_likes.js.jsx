class Like extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return(
            <p>
                Likes: {this.props.likes}
            </p>
        )
    }

}