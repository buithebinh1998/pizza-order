import React, { Component } from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';

class DataDessert extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataDessert: [],
            loading: false
        }
    }

    componentDidMount(){
        callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/desserts','GET', null).then(response =>{
            this.setState({dataDessert:response.data, loading: true})
        });
    }

    render(){
        const {dataDessert} = this.state;
        const {loading} = this.state;
        const loadDataDessert = loading ? dataDessert.map((item) => {
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
                {loadDataDessert}
            </>
        )
    }
}

export default DataDessert