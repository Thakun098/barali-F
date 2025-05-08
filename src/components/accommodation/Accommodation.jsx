import React, { useState, useEffect } from 'react'
import AccommodationService from '../../services/api/accommodation/accommodation.service';
import { Spinner } from 'react-bootstrap';
import AccommodationCard from './AccommodationCard';

const Accommodation = () => {
    const [accommodation, setAccommodation] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchAccommodation();
    }, []);

    const fetchAccommodation = async () => {
        try {
            setLoading(true);
            const res = await AccommodationService.getAll();
            console.log(res)
            setAccommodation(res?.data || []);

        } catch (error) {
            console.log("Error fetching Accommodation", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='row p-3'>
            {loading ? (
                <div className='text-center my-5'>
                    <Spinner animation='border' variant='primary' />
                </div>
            ) : (
                <>
                    {accommodation.length > 0 ? (
                        accommodation.map((acc) => (
                            <AccommodationCard
                                key={acc.id}
                                accommodation={acc}
                            />
                        ))

                    ) : (
                        <div className='text-center col-12'>
                            <p className='text-danger'>
                                ไม่สามารถโหลดข้อมูลห้องพักได้
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Accommodation
