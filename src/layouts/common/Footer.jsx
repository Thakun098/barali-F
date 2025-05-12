import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* คอลัมน์ 1 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h5>เมนูหลัก</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">หน้าแรก</a></li>
                            <li><a href="#" className="text-white text-decoration-none">โปรโมชั่น</a></li>
                            <li><a href="#" className="text-white text-decoration-none">รีวิวจากลูกค้า</a></li>
                            <li><a href="#" className="text-white text-decoration-none">ติดต่อเรา</a></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ 2 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h5>ห้องพัก</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">ห้องสแตนดาร์ด</a></li>
                            <li><a href="#" className="text-white text-decoration-none">ห้องดีลักซ์</a></li>
                            <li><a href="#" className="text-white text-decoration-none">วิลล่าส่วนตัว</a></li>
                            <li><a href="#" className="text-white text-decoration-none">ห้องสำหรับครอบครัว</a></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ 3 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h5>จุดหมายปลายทาง</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">ภูเก็ต</a></li>
                            <li><a href="#" className="text-white text-decoration-none">เชียงใหม่</a></li>
                            <li><a href="#" className="text-white text-decoration-none">กระบี่</a></li>
                            <li><a href="#" className="text-white text-decoration-none">หัวหิน</a></li>
                        </ul>
                    </div>

                    {/* คอลัมน์ 4 */}
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h5>กิจกรรม & อีเวนท์</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">งานเลี้ยงริมชายหาด</a></li>
                            <li><a href="#" className="text-white text-decoration-none">โยคะตอนเช้า</a></li>
                            <li><a href="#" className="text-white text-decoration-none">คลาสทำอาหาร</a></li>
                            <li><a href="#" className="text-white text-decoration-none">กิจกรรมสำหรับเด็ก</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
