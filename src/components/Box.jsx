const Box = ({ backgroundColor, height, width, handleDelete, idx }) => {
    
    return (
        <div
            style={{ backgroundColor, height, width }}
            onClick={() => handleDelete(idx)}
        ></div>
    )
}

export default Box;