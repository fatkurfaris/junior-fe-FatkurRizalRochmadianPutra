import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Hooks from '../Hooks/Hooks';
import style from "./DetailsContent.module.css"

export default function DetailsContent(props) {
    const id = useParams();
    const i = id.id
    const state = Hooks(props)

    return (
        <div className={style.space}>
            <Container>
                <Row>
                    <h1 className={style.text}>Details</h1>
                </Row>
                <Row>
                    <Col sm={1}></Col>
                    <Col>
                        <div className={style.space2}>
                            {
                                <img src={state ? state.data[i].show.image.original : null} width="400px" />
                            }
                        </div>
                    </Col>
                    <Col sm={1}>
                        <h5>Title</h5>
                        <h5>Genres</h5>
                        <h5>Schedule</h5>
                        <h5>Score</h5>
                    </Col>
                    <Col>
                        <h5>: {state ? state.data[i].show.name : null}</h5>
                        <h5>: {state ? state.data[i].show.genres : null}</h5>
                        <h5>: {state ? state.data[i].show.schedule.days : null}  </h5>
                        <h5>: {state ? state.data[i].score : null}</h5>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
    )
}


