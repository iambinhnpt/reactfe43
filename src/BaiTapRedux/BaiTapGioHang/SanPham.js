import React, { Component } from 'react'
import { connect } from 'react-redux';

class SanPham extends Component {
    render() {
        let { sanPham }= this.props;
        return (
            <div className="card text-left">
                <img className='card-img-top' src={sanPham.hinhAnh} alt='1'></img>
                <div className="card-body">
                <h4 className="card-title">{sanPham.tenSP}</h4>
                <button className="btn btn-success" onClick={() => {
                    this.props.xemChiTiet(sanPham)
                }}>Xem chi tiết</button>
              </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xemChiTiet: (sanPham)=>{//Dinh nghia 1 props cho component nay la 1 ham
            //Dung ham dispatch cua redux dua san pham len tat ca producer
            console.log('sanPhamDuocClick', sanPham);
            //Dung ham dispatch tu redux tra ra de dua du lieu tu reducer xu ly
            const action ={
                type: 'XEM_CHI_TIET', //Gia tri bat buoc phai co
                sanPham
            }
            dispatch(action); //gui len reducer
        }
    }
}

export default connect (null, mapDispatchToProps)(SanPham)
