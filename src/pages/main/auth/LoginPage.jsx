import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../../services/auth/auth.service';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isValidEmail = (email) => {
        // ตรวจสอบรูปแบบอีเมลเบื้องต้นด้วย RegEx
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('กรุณากรอกอีเมลและรหัสผ่านให้ครบถ้วน');
            return;
        }

        if (!isValidEmail(email)) {
            setError('รูปแบบอีเมลไม่ถูกต้อง');
            return;
        }

        setError('');
        // console.log('Login submitted:', { email, password });
        // ดำเนินการล็อกอินต่อ (เช่น ส่ง API)
        // เชื่อม API
        try {
            const user = AuthService.login(email, password);
            if (user) {
                // window.location.reload();
                alert("Login Successfully");
                navigate("/", { replace: true })

            }
        } catch (error) {
            setError(error.response.data?.message);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="mb-4 text-center">เข้าสู่ระบบ</h2>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">อีเมล</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="กรอกอีเมลของคุณ"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">รหัสผ่าน</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="กรอกรหัสผ่าน"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">เข้าสู่ระบบ</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
