import React from 'react'
import styled from 'styled-components'
import { Heading } from './Heading';


const SCard = styled.div`
margin-top: 2rem;
padding: 2rem;
background-color: #eee;
border-radius: 10px;
width: 30%;
margin: 2rem auto;
`

const Paragraph = styled.h3`
font-family: sans-serif
`

export const Card = ({ data }) => {
    console.log(data);
    return (
        <SCard>
            <Heading text={`${data.name}`} sup={data.sys.country} />
            <Paragraph>Temp: {Math.round(data.main.temp) / 10} <sup>o</sup>C </Paragraph>
            <Paragraph>Wind Speed: {data.wind.speed} </Paragraph>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='img' />
            <Paragraph>{data.weather[0].description}</Paragraph>
        </SCard >
    )
}
