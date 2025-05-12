
const HeroImage = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const heroImage = `${BASE_URL}/uploads/heroimages/`;
    const imageStyle = {
        width: "100%",
        height: "75vh",
        objectFit: "cover",
        objectPosition: "center",
    };
    return (
        <div>
            {/* Hero Carousel */}
            < div id="heroCarousel" className="carousel slide carousel-slide" data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${heroImage}/hero1.jpg`} className="d-block w-100" alt="Resort 1"
                            style={imageStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>พักผ่อนสุดหรูริมชายหาด</h2>
                            <p>สัมผัสธรรมชาติอย่างแท้จริงในรีสอร์ทระดับพรีเมียม</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${heroImage}/hero2.jpg`} className="d-block w-100" alt="Resort 2"
                            style={imageStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>ห้องพักหลากหลายสไตล์</h2>
                            <p>เลือกห้องที่เหมาะกับไลฟ์สไตล์ของคุณ</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${heroImage}/hero3.jpg`} className="d-block w-100" alt="Resort 3"
                            style={imageStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>ผ่อนคลายกับสปาระดับโลก</h2>
                            <p>ฟื้นฟูร่างกายและจิตใจในทุกช่วงเวลา</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${heroImage}/hero4.jpg`} className="d-block w-100" alt="Resort 4"
                            style={imageStyle} />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>สระว่ายน้ำวิวทะเล</h2>
                            <p>วิวหลักล้าน ที่คุณไม่ควรพลาด</p>
                        </div>
                    </div>
                </div>

                {/* ปุ่มควบคุม */}
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">ก่อนหน้า</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">ถัดไป</span>
                </button>
            </div >
        </div >

    )
}

export default HeroImage
