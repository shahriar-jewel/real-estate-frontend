import axios from 'axios'
import { useEffect, useState, useRef } from 'react'


function PropertyProvider() {
    const [property, setProperty] = useState([]);
    const [callback, setCallback] = useState(false);
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);
    // const [listingFor, setListingFor] = useState('sale');
    const [loading, setLoading] = useState(false);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            setLoading(true);
            const getProperties = async () => {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE}/property?page=${page}&pageSize=${pageSize}&listingFor=sale`);
                setProperty(res.data.data.properties);
                setLoading(false);
                // console.log(res.data.data.properties);
            }
            getProperties();
        } else {
            isMounted.current = true;
        }
    }, [pageSize, callback]);

    return {
        property: [property, setProperty],
        pageSize: [pageSize, setPageSize],
        callback: [callback, setCallback],
        loading: [loading, setLoading]
    }
}

export default PropertyProvider;
