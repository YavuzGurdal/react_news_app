import React from 'react'
import { Card, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

function NewsCard(props) {

    // var clickHandler = (parametre) => {
    //     console.log(parametre)
    // }

    return (

        <div style={{ width: props.newWidth, height: props.newHeight /*width'i propsdan aldim. 100% yapabilmek icin*/ }}> 
            <div className="m-2 shadow cardbox" >
                <Card >
                    <Card.Img variant="top" src={props.urlToImage} style={{ height: '200px' }} />

                    <Card.Title className="cardTitle mb-1" style={{ height: '130px', padding: '8px' }}>{props.title}</Card.Title>
                    <Card.Text className="cardText mb-1" style={{ height: props.newTextHeight, padding: '8px' }}>
                        {props.description}
                    </Card.Text>

                    <Button className='m-2' style={{display: props.display}} variant="outline-primary"
                        onClick= {props.click}
                        //value={props.publishedAt}
                        // onClick={onClickHandler}
                        //onClick={ () => clickHandler({props.publishedAt}) }
                    >
                        Read More
                    </Button>

                    {/* <Link to="/news-detail">
                        <Button variant="primary">Read More</Button>
                    </Link> */}
                </Card>
            </div>
        </div>
    )
}

export default NewsCard