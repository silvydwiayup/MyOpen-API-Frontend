import './Information.css';

const Information = () => {
    return (
        <Container_Information />
    );
};

const Container_Information = () => {
    return (
        <div className="container-information">
            <div className="section-information">
                <div className="container-right-information">
                    <div className="image-wrapper">
                        <img src="link-gambar.jpg" alt="Deskripsi Gambar" />
                    </div>
                </div>
                <div className="container-left-information">
                    <div className="left-top">
                        <h2>Import Data From Your Users 10x Faster</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quas cum libero delectus sapiente dignissimos inventore labore, nisi fugit similique a culpa deserunt atque hic facere quidem perspiciatis officiis neque.</p>
                    </div>
                    <div className="left-bottom">
                        <button onClick={() => window.open("https://accounts.google.com", "_blank")}>
                            Masuk dengan Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
