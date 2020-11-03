import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { SearchBox } from './components/SearchBox'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { fetchWeather } from './api/fetchWeather'
import { Card } from './components/Card'

const Wrapper = styled.div`
    padding: 4em;
    width: 100%;
    height: 80vh;
    background: white;
    text-align: center;
    margin: auto;
    background-image: url('https://media.gettyimages.com/photos/terraced-fieldyunnanchina-picture-id1132716778?s=2048x2048')
    `;


export default function App() {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState(null)
    const [apiError, setApiError] = useState(null)

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchWeather(query).then(result => {
                setWeather(result.data)
            }).catch(error => {
                setApiError('City Not found!')
            })
            setQuery('')
        }
    }

    const onChange = (e) => {
        setQuery(e.currentTarget.value)
    }

    return (
        <Container>
            <Row>
                <Wrapper>
                    <SearchBox
                        onKeyPress={onKeyPress}
                        onChange={onChange}
                        name={query}
                    />
                    {
                        weather !== null ? (
                            <Card data={weather} />
                        ) : null
                    }
                    {
                        apiError !== null ? (
                            <span>{apiError}</span>
                        ) : null
                    }
                </Wrapper>
            </Row>
        </Container>
    )
}
