import React from 'react'
import './Modal.css'
import * as Yup from 'yup'
import {withFormik, Form, Field, ErrorMessage} from 'formik'
import swal from 'sweetalert'

const PizzaForm = ({values, isSubmitting}) => {
    return(
        <Form className="form-pizza">
            <h2 style={{color:'#0078ae', fontWeight:'bold', textAlign:'left'}}>CHOOSE PIZZA SIZE:</h2>
            <input id="medium" value="medium" name="size" type="radio"/>
            <label htmlFor="medium">Medium</label><br/><br/>
            <input id="large" value="large" name="size" type="radio"/>
            <label htmlFor="large">Large</label>

            <h2 style={{color:'#0078ae', fontWeight:'bold'}}>CHOOSE PIZZA CRUST:</h2>
            <input id="thin" value="thin" name="crust" type="radio"/>
            <label htmlFor="thin">Think crust</label><br/><br/>
            <input id="thick" value="thick" name="crust" type="radio"/>
            <label htmlFor="thick">Thick crust</label><br/><br/>
            
            <button>ADD TO CART</button>
        </Form>
    )
}

const FormikPizzaForm = withFormik({
    mapPropsToValues(){
        return{
            size: false,
            crust: false
        }
    },

})(PizzaForm);


const ModalPizza = (props) => {
    return(
        <>
        <div className="backdrop" style={{
            display: props.show ? "block" : "none",
            opacity: props.show ? "1" : "0"
          }}
        >
        </div>   

        <div className="modal" style={{
            display: props.show ? "block" : "none",
            opacity: props.show ? "1" : "0"
          }}
        >
            <div className="pizza-details">
                <button className="remodal-close" onClick={props.clicked}/>
                <div className="pizza-info">
                    <h1>{props.pizza.name}</h1>
                    <h3>{props.pizza.desc}</h3>
                    <div>
                        <img className="pizza-img" src={`https://drive.google.com/uc?export=view&id=${props.pizza.imgLink}`} alt=""></img>
                    </div>
                    <h2 style={{textAlign:'center'}}>{props.pizza.price}</h2>
                </div>

                <div className="pizza-customize">
                    <FormikPizzaForm/>
                </div>
                
            </div>
        </div>
        </>
    )
}  

export default ModalPizza;