import React, { Component } from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';

class DataSideDish extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSideDish: [],
            loading: false
        }
    }

    componentDidMount(){
        callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/sidedishes','GET', null).then(response =>{
            this.setState({dataSideDish:response.data, loading: true})
        });
    }

    

    render(){
        const {dataSideDish} = this.state;
        const {loading} = this.state;
        const loadDataSideDish = loading ? dataSideDish.map((item) => {
            return(
                <div className="item" key={item.id}>
                    <div className="item-img">
                        <img src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
                    </div>
                    <div className="item-name" >{item.name}</div>
                    <div className="item-price" >{item.price}</div>
                    <button>VIEW DETAILS</button>
                </div>
            )
        }):<Spinner/>;

        return(
            <>
                {loadDataSideDish}
            </>
        )
    }
}

export default DataSideDish