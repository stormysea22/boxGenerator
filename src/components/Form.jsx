const Form = ({ inputs, handleSubmit, handleChange }) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="color"
                    value={inputs.color}
                />
            </div>
            <div className="form-group">
                <label htmlFor="height">Height:</label>
                <input
                    type="number"
                    onChange={handleChange}
                    name="height"
                    value={inputs.height}
                />
            </div>
            <div className="form-group">
                <label htmlFor="width">Width:</label>
                <input
                    type="number"
                    onChange={handleChange}
                    name="width"
                    value={inputs.width}
                />
            </div>
            <input
                type="submit"
                value="Submit"
                className="btn btn-warning btn-outline-dark"
            />
        </form>
    )
}

export default Form;