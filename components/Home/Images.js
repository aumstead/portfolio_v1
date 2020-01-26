const Images = () => {
    return (
        <div className="images-container">
            <img
                src="/me_standing.jpg"
                alt=""
                className="image--1"
            ></img>
            <img
                src="/me_beach.jpg"
                alt=""
                className="image--2"
            ></img>
            <img
                src="/greatwall.jpg"
                alt=""
                className="image--3"
            ></img>
            <style jsx>{`
                .image--1 {
                    width: 150px;
                    position: absolute;
                    top: 330px;
                    right: 200px;
                    z-index: 5;
                }

                .image--2 {
                    width: 190px;
                    position: absolute;
                    top: 220px;
                    right: 260px;
                    z-index: 4;
                }

                .image--3 {
                    width: 150px;
                    position: absolute;
                    top: 320px;
                    right: 340px;
                    z-index: 3;
                }
            `}</style>
        </div>
    );
};

export default Images;
