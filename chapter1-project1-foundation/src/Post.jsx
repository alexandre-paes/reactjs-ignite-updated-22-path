export function Post(props) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
            <p>{props.separator}</p>
        </div>
    )
}