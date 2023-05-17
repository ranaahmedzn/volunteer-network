import Header from "../../../shared/Header/Header";
import './Home.css'

const Home = () => {
    return (
        <div className="">
            <div className="banner-container relative">
                <div className="absolute w-full">
                    <Header />
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
            
        </div>
    );
};

export default Home;