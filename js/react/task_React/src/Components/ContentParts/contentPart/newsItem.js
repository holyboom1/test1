import React, {Fragment} from "react"
import {Card,Row, CardBody, Button,CardImg, CardText, CardTitle, CardSubtitle, Col, CardLink, CardImgOverlay} from "reactstrap"
import FullNews from "./fullNewS"
import {connect} from "react-redux";
import {Link, Switch, Route, Redirect} from "react-router-dom";
import fullNewS from "./fullNewS";
import Comments from "../../AppParts/comments";

function NewsItem(props) {
    let item=props.item


    let login = ()=> {
        props.dispatch({type: "LOGIN_MODAL", text: "Необходимо авторизоваться!"})
    }

    return <Fragment>
        {document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true") ?
        <Card inverse  className={"col-sm-6 text-decoration-none "} >
            <Link  to={{
                pathname: `/news/${item.id}`,
                item: item
            }}>
            <CardImg className={""} width="100%" src={`${item.src}`} alt="Card image cap"  />
            <CardImgOverlay >
                <CardTitle tag="h5" className={"text-light"}>{item.title}</CardTitle>
                <CardText className={" text-truncate text-light"}>
                    {item.preview}
                </CardText>

            </CardImgOverlay>
            </Link>
        </Card>
            :

        <Card inverse  className={"col-sm-6"} >
                <Link to={`/news`} onClick={login}>
                <CardImg className={""} width="100%" src={`${item.src}`} alt="Card image cap"   />
                <CardImgOverlay >
                    <CardTitle  tag="h5" className={"text-light"}>{item.title}</CardTitle>
                    <CardText className={" text-truncate text-light"}>
                        {item.preview}
                    </CardText>

                </CardImgOverlay>
                </Link>
        </Card>

        }



    </Fragment>
}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(NewsItem);