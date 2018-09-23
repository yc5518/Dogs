class Comment extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return(
            <p>
                this is comment of {this.props.id}
            </p>
        )
    }

}