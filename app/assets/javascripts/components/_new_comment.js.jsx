class NewComment extends React.Component{

    constructor(props){
        super(props);

        this.handleOnFoucus=this.handleOnFoucus.bind(this)

    }

    handleOnFoucus(){
        return alert('Please login to comment!');
    }

    render(){
        return(
            <div>
                <input onClick={this.handleOnFoucus}/>
                <button >Submit</button>
            </div>
        )
    }
}