const Card = (props) => {
    return (
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1788846018535-5735e326a9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" alt="img-logo" />
            <h1>Welcome {props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card