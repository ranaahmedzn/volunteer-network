
const SingleEvent = ({event}) => {
    const bgImage = {backgroundImage: `url(${event.image})`}

    return (
        <div className='w-full h-[350px] rounded-lg bg-cover relative' style={bgImage}>
            <h3 className="text-2xl font-bold text-center bg-blue-500 absolute w-full h-[90px] bottom-0 rounded-bl-lg rounded-br-lg pt-4 px-1 text-white">{event.event_title}</h3>
        </div>
    );
};

export default SingleEvent;