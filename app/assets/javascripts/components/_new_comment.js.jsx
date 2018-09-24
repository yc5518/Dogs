class NewComment extends React.Component{

    constructor(props){
        super(props);

        this.handleOnFoucus=this.handleOnFoucus.bind(this)

    }

    handleOnFoucus(event){
        alert('Please login to comment!');
        event.target.blur()
    }

    render(){
        return(
            <div>
                <input onFocus={this.handleOnFoucus.bind(this)}/>
                <button onClick={this.handleOnFoucus.bind(this)}>Submit</button>
            </div>
        )
    }
}