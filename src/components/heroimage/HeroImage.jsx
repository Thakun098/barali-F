import React from 'react'

const HeroImage = () => {
    return (
        <div>
            {/* Hero Carousel */}
            < div id="heroCarousel" className="carousel slide carousel-slide m-4" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/1400/400?random=1" className="d-block w-100" alt="Resort 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>พักผ่อนสุดหรูริมชายหาด</h2>
                            <p>สัมผัสธรรมชาติอย่างแท้จริงในรีสอร์ทระดับพรีเมียม</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1400/400?random=2" className="d-block w-100" alt="Resort 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>ห้องพักหลากหลายสไตล์</h2>
                            <p>เลือกห้องที่เหมาะกับไลฟ์สไตล์ของคุณ</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1400/400?random=3" className="d-block w-100" alt="Resort 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>ผ่อนคลายกับสปาระดับโลก</h2>
                            <p>ฟื้นฟูร่างกายและจิตใจในทุกช่วงเวลา</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/1400/400?random=4" className="d-block w-100" alt="Resort 4" />
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
