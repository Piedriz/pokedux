import React from 'react'
import { Input, Col } from 'antd'
import '../styles/searcher.css'
import { useDispatch } from 'react-redux'
import { setFilter } from '../slices/dataSlice'


export const Searcher = () => {
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        dispatch(setFilter(e.target.value));
      }
    return (
        <Col span={12} offset={6}>
            <Input.Search onChange={handleOnChange} className='searcher' placeholder='buscar...' />
        </Col>

    )
}