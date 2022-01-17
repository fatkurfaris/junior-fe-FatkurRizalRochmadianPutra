import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Hooks from '../Hooks/Hooks';
import style from "./HeaderContent.module.css"
import { Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeaderContent(props) {
    const state = Hooks(props)
    // console.log(state);

    return (



        <div className={style.background}>
            <div className={style.Nav}>
                <div className={style.Nav2} >
                    <h6 className={style.logo}>Camplix</h6>
                    <h6 className={style.logo}><Link className={style.link} to={`/`} >Home</Link></h6>
                </div>
                <div className={style.Nav2}>
                    {/* <input type="text" placeholder="Fatkur Rizal Rochmadian Putra" /> */}
                    <Form.Group as={Col} md="5" controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Fatkur Rizal"
                        />
                    </Form.Group>
                    <h6 className={style.text1}><b>Fatkur Rizal Rochmadian Putra</b></h6>
                </div>
            </div>
            <div>
                <a href={state ? state.data[1].show.image.original : null} target="_blank">
                    <h6 className={style.text2}>{state ? state.data[1].show.image.original : null}</h6>
                </a>
            </div>
        </div >

    )
}
