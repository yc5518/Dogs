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


    }


    render() {

        let breeds = this.props.breeds.map((breed) => {
            return (
                <div key={breed.id}>
                    <img onClick={this.handleOnClick.bind(this)} id={breed.id} src={breed.img_url}/>
                    {breed.id == this.state.clickedId ? <Interaction breed={breed}/> : null}
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