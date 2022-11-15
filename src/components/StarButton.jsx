import React from 'react'
import { Button } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons'

export const StarButton = ({ isFavorite, onClick })=> {
    const Icon = isFavorite ? StarFilled : StarOutlined
    
    return <Button style={{borderStyle:'none'}} icon={<Icon/>} onClick={onClick}>

    </Button>
}