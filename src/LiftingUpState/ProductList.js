import React, { Component } from 'react'
import Product from './Product';
// Điều kiện lưu State:
// 1. Chứa giao diện được binding từ state (Trực tiếp hoặc gián tiếp)
// 2. Chứa nút xử lý làm thay đổi state đó (Trực tiếp hoặc gián tiếp)
export default class ProductList extends Component {
    renderProList = () => {
        return this.props.proList.map((item, index) => {
            return <div className="col-sm-4" key = {index}>
            <Product handleBuy = {this.props.handleBuy} handleSelectPro={this.props.handleSelectPro} item={item}/>
          </div>
          
        })
    }

    render() {
        return (
            <div>
                <div className="row">
        {this.renderProList()}
        </div>
            </div>
        )
    }
}
