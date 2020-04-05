import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
// import { TiNews } from "react-icons/ti";
import { GiNewspaper } from "react-icons/gi";
import { categoryData } from '../../data';


function NavBar(props) {

    const [text, setText] = useState(null)

    const [category, setCategory] = useState(null)
    const [country, setCountry] = useState(null)

    const sendFunction = () => {

        props.click(
            category,
            country
        )
    }

    sendFunction()

    const handleSubmit = (event) => {
        event.preventDefault();
        // submit
        props.click3(
            text
        )
        //console.log(text)
        setText('')   
    }


    return (
        // fixed="top" ; navbarın yukarıda sabit kalmasını saglıyor
        // expand="lg"
        <div style={{ fontFamily: 'Special Elite, cursive' }}>
            <Navbar fixed="top" expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/">YVZ NEWS <GiNewspaper className='iconn' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/*<Nav.Link href="/news-detail">Detail Page</Nav.Link>*/}
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {
                                categoryData.categoriesData.map((item, i) =>
                                    //<NavDropdown.Item key={i} onClick={() => props.click(`${item.name.toLowerCase()}`)}>{item.name}</NavDropdown.Item>
                                    <NavDropdown.Item key={i} onClick={() => setCategory(`${item.name.toLowerCase()}`)}>{item.name}</NavDropdown.Item>
                                )
                            }
                        </NavDropdown>
                        <NavDropdown title="Country" id="basic-nav-dropdown">
                            {
                                categoryData.categoriesCountry.map((item, i) =>
                                    //<NavDropdown.Item key={i} onClick={() => props.click2(`${item.parameter}`)}>{item.name}</NavDropdown.Item>
                                    <NavDropdown.Item key={i} onClick={() => setCountry(`${item.parameter}`)}>{item.name}</NavDropdown.Item>
                                )
                            }
                        </NavDropdown>
                    </Nav>

                    <Form inline onSubmit={handleSubmit}>
                        <FormControl type="text" value={text}  onChange={e => setText(e.target.value)} placeholder="Search" className="mr-sm-2" autoComplete='off'/>
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar