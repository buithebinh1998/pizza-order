import React, { Component } from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';

class DataBeverage extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataBeverage: [],
            loading: false
        }
    }

    componentDidMount(){
        callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/beverages','GET', null).then(response =>{
            this.setState({dataBeverage:response.data, loading:true});
        });
    }

    render(){
        const {dataBeverage} = this.state;
        const {loading} = this.state;
        const loadDataBeverage = loading ? dataBeverage.map((item) => {
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

        return(
            <>
                {loadDataBeverage}
            </>
        )
    }
}

export default DataBeverage