import { useEffect, useState } from "react";
import Header from "../../../shared/Header/Header";
import './Home.css'
import SingleEvent from "../SingleEvent/SingleEvent";

const Home = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    console.log(events)
    return (
        <div className="">
            <div className="banner-container relative">
                <div className="absolute w-full">
                    <Header></Header>
                    <div className="w-1/2 mx-auto text-center mt-5">
                        <h3 className="text-4xl font-bold">I grow by helping people in need.</h3>
                        <div className="input-group w-2/3 mx-auto my-8">
                            <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mt-20 mb-16 relative z-50 max-w-7xl px-4 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    events.map(event => <SingleEvent
                    key={event._id}
                    event={event}
                    ></SingleEvent>)
                }
            </div>
        </div>
    );
};

export default Home;