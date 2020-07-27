import React, { Component } from 'react';
import data from './data.json';


import ProductList from './ProductList';
import Card from './Card';
import BTProductItem from '../Components/BaiTapLayout/BTProductItem';
export default class Examplecard extends Component {
    state = {
        proList: data,
        proSelected: null,
        cardList: [],
    };
    //Xử lý tăng giảm số lượng

    tangGiamSoLuong = (maSP, tangGiam) => { //Tang la true, giam la false
      //Tìm ra sản phẩm chứa maSP = với maSP nút tăng giảm số lượng click
      console.log(maSP);
      let gioHangCapNhat = [...this.state.cardList];

      const cardUpdated = [...this.state.cardList].map(card => card.maSP === maSP ? ({
        ...card,
        soLuong: tangGiam ? card.soLuong += 1 : card.soLuong -= 1
      }) : card) 

      //setState làm thay đổi số lượng
      this.setState({
        cardList: cardUpdated,
      })


    }
    

    handleSelectPro = (pro) => {
        this.setState({proSelected: pro});
    }

    handleBuy =(card) =>{
        // tạo cardList mới
        let cardListUpdate = [...this.state.cardList];
        //Tim vi tri cua phan tu trong mang
        let index = cardListUpdate.findIndex((item)=> item.maSP === card.maSP);
        if(index >= 0){
            cardListUpdate[index].soLuong++;
        } else{
            card.soLuong = 1;
            cardListUpdate= [...cardListUpdate, card];
        }
        //setState
        this.setState({
            cardList: cardListUpdate,
        });
    }
    handleDelete = (card)=>{
        //   1/ Tim vi tri
                //   2/ Xoa khoi mang
                //   3/ setState lai
                // let cardListUpdate = [...this.state.cardList];
                // let index = cardListUpdate.findIndex((item)=>item.maSP === card.maSP);
                // if(index >=0) {cardListUpdate.splice(index, 1);}

                const cardUpdated = [...this.state.cardList].filter(item => item.maSP !== card.maSP)
                
                this.setState({
                    cardList: cardUpdated,
                });
    }
    
    render() {
        return (
            <div>
    <div className="container">
      <Card tangGiamSoLuong={this.tangGiamSoLuong} handleDelete={this.handleDelete} cardList={this.state.cardList}/>
      <ProductList handleBuy={this.handleBuy} handleSelectPro={this.handleSelectPro} proList = {this.state.proList}/>
      
        {this.state.proSelected? (<div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={this.state.proSelected.hinhAnh} />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{this.state.proSelected.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{this.state.proSelected.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{this.state.proSelected.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{this.state.proSelected.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{this.state.proSelected.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{this.state.proSelected.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ): null}
      </div>
  </div>
  

        )
    }
}
