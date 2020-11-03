import styled from 'styled-components'
import React from 'react'

const SBox = styled.input`
border: 2px solid #000;
border-radius: 20px;
outline: none;
font-size: 20px;
padding: 10px 30px
`


export const SearchBox = ({ name, onKeyPress, onChange }) => {
    return (
        <div>
            <SBox
                placeholder='Search ...'
                name={name}
                value={name}
                onKeyPress={onKeyPress}
                onChange={onChange}
            />
        </div>
    )
}
