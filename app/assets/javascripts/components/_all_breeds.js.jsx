const AllBreeds = (props) => {
    var breeds = props.breeds.map((breed) => {
        return(
            <div key={breed.id}>
                <h1>{breed.name}</h1>
                <p>{breed.img_url}</p>
                <p>{breed.likes}</p>
            </div>
        )
    })
    return(
        <div>
            {breeds}
        </div>
    )
}