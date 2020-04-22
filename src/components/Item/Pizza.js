import React, { Component } from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';
import { connect } from 'react-redux';
class DataPizza extends Component{
    constructor(props){
        super(props);
        this.state={
            dataPizza: [],
            loading: false
        };
    }

    componentDidMount(){
        callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/pizzas','GET', null).then(response =>{
            this.setState({dataPizza:response.data, loading:true})
        });
    }

    render(){
        const {dataPizza} = this.state;
        const {loading} = this.state;
        console.log(dataPizza);
        const loadDataPizza = loading ? dataPizza.map(item => {
            return(
            <div className="item" key={item.id}>
                <div className="item-img">
                    <img src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price}</div>
                <button>VIEW DETAILS</button>
            </div>
            )
        }):<Spinner/>;

        return (
            <>
            {loadDataPizza}
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        dataPizza : state.products.dataPizza
    };
};

export default connect(mapStateToProps)(DataPizza);
