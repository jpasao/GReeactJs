import { Fragment } from "react";
import { Link } from "react-router-dom";
import { sections } from "../resources/sections";
import Button from "../components/button.component";
import { BUTTON_TYPES } from "../resources/button-types";

const Directory = () => {
  return (
    <Fragment>  
        <ul>    
        {sections.map((title) => {
          const { route, component } = title;
          const name = component.props.title;
          const props = {
            type: BUTTON_TYPES.navigation,
            content: name
          }
          return (
            <li key={route}>
              <Link to={route}>
                <Button buttonProps={props} />
              </Link>
            </li>)
        })} 
        </ul>     
    </Fragment>
  )
}

export default Directory;