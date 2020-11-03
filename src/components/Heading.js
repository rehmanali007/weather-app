import React from 'react'
import styled from 'styled-components'

const MHeading = styled.h1`
    font-family: sans-serif

`

export const Heading = ({ text, sup = null }) => {
    return (<MHeading>
        {text} <sup>{sup}</sup>
    </MHeading>
    )
}
