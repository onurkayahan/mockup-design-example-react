import React from 'react'
import { Button } from 'reactstrap';

export default function Description() {
    return (
        <div className="description center text-center">
            <h1 className="description-main">YOU SHOULD BUILD THIS</h1>
            <h1 className="description-main">SIMPLE, LOGICAL, & STRAIGHTFORWARD</h1>
            <p className="description-par" style={{ textAlign: "left" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl erat, facilisis ut pulvinar nec, rhoncus quis ex. Curabitur lobortis massa dictum dolor feugiat fermentum. Nam ut fringilla dolor, sit amet gravida nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lobortis dolor et ex tristique commodo. Sed non libero a diam condimentum dictum. Nullam porta finibus felis eget interdum. Aliquam tempus mauris eget tellus eleifend, sit amet euismod tellus volutpat.</p>
            <Button color="success" className="shadow-lg mt-3" size="lg">LEARN MORE</Button>
        </div>
    )
}
