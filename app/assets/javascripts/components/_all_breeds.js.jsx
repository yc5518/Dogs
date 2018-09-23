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
                    <br/>
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
