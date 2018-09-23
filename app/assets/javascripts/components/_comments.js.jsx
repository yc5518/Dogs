class Comment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
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
                    <p><strong>{item.creator}</strong>{item.reply_to === null ? " : " :
                        <div><i> reply to: </i><strong>{item.reply_to}</strong></div>}{item.content}</p>
                </div>
            )

        })

        return (
            <div>
                {items}
                <NewComment/>
            </div>

        )
    }

}