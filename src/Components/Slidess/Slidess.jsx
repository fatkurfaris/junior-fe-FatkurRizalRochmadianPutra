import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Hooks from '../Hooks/Hooks';
import style from "./Slidess.module.css"

export default function Slidess(props) {
    const state = Hooks(props)

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }

    return (
        <div className={style.back}>
            <Container>
                <h2 className={style.text2}>Relate Movie</h2>
                <Slider {...settings}>

                    {/* {console.log(state)} */}
                    {
                        state?.data.map((item, index) => {
                            // console.log(item ? item.show.image.medium : null);
                            if (index < 5) {
                                return (
                                    <div>
                                        <Card style={{ width: '15rem' }}>
                                            <Card.Img variant="top" src={item ? item.show.image.medium : null} />
                                            <Card.Body>
                                                <Card.Title>{item ? item.show.name : null}</Card.Title>
                                                <Card.Text>
                                                    {item ? item.show.image.medium : null}
                                                </Card.Text>
                                                <Button variant="primary" className={style.But}>
                                                    <Link className={style.Text} to={`/Details/${index}`}>See Details</Link>
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                        {/* {item ? <img src={item.show.image.medium} /> : null} */}

                                    </div>
                                )
                            } else if (index >= 5 && index < 7) {
                                return (
                                    <div>
                                        <Card style={{ width: '15rem' }}>
                                            <Card.Img variant="top" />
                                            <Card.Body>
                                                <Card.Title>{item ? item.show.name : null}</Card.Title>
                                                <Card.Text>
                                                    {/* {item ? item.show.image.medium : null} */}
                                                </Card.Text>
                                                <Button variant="primary">See Details</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            }
                            else if (index > 6 && index <= 9) {
                                return (
                                    <div>
                                        <Card style={{ width: '15rem' }}>
                                            <Card.Img variant="top" src={item ? item.show.image.medium : null} />
                                            <Card.Body>
                                                <Card.Title>{item ? item.show.name : null}</Card.Title>
                                                <Card.Text>
                                                    {item ? item.show.image.medium : null}
                                                </Card.Text>
                                                <Button variant="primary" className={style.But}>
                                                    <Link className={style.Text} to={`/Details/${index}`}>See Details</Link>
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                        {/* {item ? <img src={item.show.image.medium} /> : null} */}
                                    </div>

                                )
                            }

                        })
                    }
                </Slider>

            </Container>
        </div>
    );
}


{/* {console.log(item.score, index)}
                                        {item ? <img src={item.show.image.medium} alt="" /> : null} */}