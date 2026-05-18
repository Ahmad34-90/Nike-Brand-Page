const Hero = () =>{
    return(
        <main className="hero-section flex items-center m-auto max-w-2xl">
            <div className="hero-content ">
                <h1 className="font-bold text-6xl">Your Feet Diverse The Best</h1>
                <p className="text-sm m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius quas adipisci nemo atque est doloribus omnis qui quasi libero.</p>
                <div className="hero-btn">
                    <button className="bg-red-600 text-white m-3 p-2">Shop Now</button>
                    <button className="border p-2">Category</button>
                </div>
                <div className="hero-available">
                    <p className="text-sm">Also Available On</p>
                    <div className="brand-icons flex w-40 h-auto">
                        <img src="/images/amazon.png" alt="Amazon-logo" />
                        <img src="/images/flipcart.png" alt="Flipcart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-img w-full">
                <img src="/images/shoe.png" alt="shoe" />
            </div>
        </main>
    );
}
export default Hero;