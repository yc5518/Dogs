class Comment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        alert('/api/v1/comments/' + this.props.id)
        fetch('/api/v1/comments/' + this.props.id)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    comments: data
                })

            });
    }


    render() {

        let items = this.state.comments.map((item) => {
            return (
                <div key={item.id}>
                    <strong>{item.creator}:</strong>
                    <p>{item.content}</p>
                </div>
            )

        })

        return (
            <div>
                {items}
                <input/>
            </div>

        )
    }

}