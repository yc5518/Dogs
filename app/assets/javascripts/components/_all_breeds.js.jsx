class AllBreeds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            clickedId: 0
        };
    }

    handleOnClick(event) {
        this.setState({
            clickedId:event.target.id
        })

//         // fetch('/api/v1/comments.json')
//         //     .then((response) => {
//         //         return response.json()
//         //     })
//         //     .then((data) => {
//         //         this.setState({comments: data})
//         //     });
    }


    render() {

        let breeds = this.props.breeds.map((breed) => {
            return (
                <div>
                    <img onClick={this.handleOnClick.bind(this)} key={breed.id} id={breed.id} src={breed.img_url}/>
                    {breed.id == this.state.clickedId?<Like likes={breed.likes}/>:null}
                    {breed.id == this.state.clickedId?<Comment id={breed.id}/>:null}
                </div>
            )
        })

        return (
            <div>
                {breeds}
            </div>
        )
    }

}


// const AllBreeds = (props) => {
//
//     let handleOnClick = (event) => {
//         alert(event.target.id)
//         // fetch('/api/v1/comments.json')
//         //     .then((response) => {
//         //         return response.json()
//         //     })
//         //     .then((data) => {
//         //         this.setState({comments: data})
//         //     });
//     }
//
//     let breeds = props.breeds.map((breed) => {
//         return (
//             <div>
//                 <img onClick={handleOnClick.bind(this)} key={breed.id} id={breed.id} src={breed.img_url}/>
//                 {breed.id === <Comment id={breed.id}/>}
//             </div>
//         )
//     })
//     return (
//         <div>
//             {breeds}
//         </div>
//     )
// }