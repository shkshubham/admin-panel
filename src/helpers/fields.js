import React from 'react';
import { Col, InputGroupText, InputGroupAddon, InputGroup } from 'reactstrap';

export function renderFields(field){
    return(
        <div>
        <InputGroup className={field.className}>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className={field.icon}></i>
                </InputGroupText>
            </InputGroupAddon>
            <input {...field.input}
                type={field.type}
                placeholder={field.placeholder}
                />

        </InputGroup>
            <Col style={{
                padding: 0
            }} xs={12} className="error">
                <span>{field.meta.touched ? field.meta.error : ''} </span>
            </Col>
        </div>
    )
}