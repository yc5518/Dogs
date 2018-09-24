class Like extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likes:this.props.breed.likes
        }
    }

    handleOnClickLikes(){
        // let body = JSON.stringify({breed: {name: this.props.breed.name, img_url:this.props.breed.img_url, likes:this.props.breed.likes + 1} })
        // fetch('http://localhost:3000/api/v1/breeds', {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: body,
        // }).then((response) => {return response.json()})
        //     .then((breed)=>{
        //         this.setState({
        //             likes:breed.likes
        //         })
        //     })

        alert('Please login to like this breed!')
    }

    render() {
        return (
            <div>
                <p onClick={this.handleOnClickLikes.bind(this)}>
                    Likes: {this.state.likes}
                </p>
            </div>

        )
    }

}