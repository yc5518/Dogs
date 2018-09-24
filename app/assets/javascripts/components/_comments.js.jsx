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
        let result = this.state.comments;

        let items = result===null ? null : result.map((item) => {
            return (
                <div key={item.id}>
                    <div><strong>{item.creator}</strong>{item.reply_to === null ? " : " :
                        <div><i> reply to: </i><strong>{item.reply_to}</strong></div>}{item.content}</div>
                    <br/>
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