import React, { Component } from 'react';
import QuickReview from '../../components/quickReview/quickReview';
// import Header from '../../components/header';
import '../../App.css';
import ListQuickReview from '../../components/listQuickReview/listQuickReview';
import { connect } from 'react-redux';
import { actFetchHotelRequest } from '../../actions/index';
import SearchArea from '../../components/searchArea/searchArea';

class ListReviewPage extends Component {

    componentDidMount(){
        this.props.fetchAllHotel();
        console.log('did mount');
    }

    render() {
       var {hotels} = this.props;
        return (
                <div className="content">
                    <div className="main">
                        <SearchArea></SearchArea>
                        <ListQuickReview>
                            {this.showHotels(hotels)}
                        </ListQuickReview>
                    </div>
                </div>

        );
    }


    showHotels(hotels) {
        let result = null;
        if (hotels.length > 0) {
            result = hotels.map((hotel, index) => {
                return (
                    <QuickReview 
                    key={index} 
                    hotel={hotel} ></QuickReview>
            )
            });
        }
        return result;
    }
}



const mapStateToProps = state => {
    return {
        hotels: state.hotels
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllHotel: () => {
            dispatch(actFetchHotelRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListReviewPage);
