const Home = () => {
    return (
        <div className='w-full h-auto relative'>
            <img src="Image.jpg" alt="img" className='w-full h-[80vh] opacity-75' />
            <div className="absolute top-30 left-50">
                <h1 className="text-7xl font-bold font-serif text-emerald-950">Welcome to React Duniya</h1>
                <h1 className="text-4xl font-bold font-serif text-emerald-700 text-center mt-10 "> Become Frontend devloper</h1>
            </div>
        </div>
    );
}

export default Home;
