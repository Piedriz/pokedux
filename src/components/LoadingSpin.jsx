import React from 'react'
import { Spin, Col } from 'antd'

export const LoadingSpin = () => {
    return (
        <Col offset={12}>
            <Spin spinning size="large" />
        </Col>
    )
}
