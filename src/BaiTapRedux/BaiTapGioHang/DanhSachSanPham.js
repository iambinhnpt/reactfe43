import React, { Component } from "react";
import SanPham from "./SanPham";
import { connect } from "react-redux";

class DanhSachSanPham extends Component {
  renderSanPham = () => {
    return this.props.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sanPham={sanPham}></SanPham>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3>Danh Sach San Pham</h3>
        <div className="row">{this.renderSanPham()}</div>
        <h3>Chi tiet san pham</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Tên sản phẩm</td>
              <td>{this.props.spChiTiet.tenSP}</td>
            </tr>
            <tr>
              <td>Màn hình</td>
              <td>{this.props.spChiTiet.manHinh}</td>
            </tr>
            <tr>
              <td>Hệ điều hành</td>
              <td>{this.props.spChiTiet.heDieuHanh}</td>
            </tr>
            <tr>
              <td>Camera trước</td>
              <td>{this.props.spChiTiet.cameraTruoc}</td>
            </tr>
            <tr>
              <td>Camera sau</td>
              <td>{this.props.spChiTiet.cameraSau}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{this.props.spChiTiet.ram}</td>
            </tr>
            <tr>
              <td>ROM</td>
              <td>{this.props.spChiTiet.rom}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

//Day la ham lay state tu redux chuyen thanh props cua component
const mapStateToProps = (state) => {
  return {
    spChiTiet: state.stateBaiTapGioHang.spChiTiet,
  };
};

export default connect(mapStateToProps)(DanhSachSanPham);
