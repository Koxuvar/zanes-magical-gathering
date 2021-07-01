const Image = (props) => {
    console.log(props)
    return (
        <div>
            <img src={props.src}></img>
        </div>
    )
}

export default Image