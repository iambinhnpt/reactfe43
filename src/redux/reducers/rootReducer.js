import { combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
//store tong cua ung dung chua tat ca cac state cua ung dung
const rootReducer = combineReducers({
    //Noi khai bao cac state theo tung nghiep vu
    stateBaiTapGioHang: BaiTapGioHangReducer
});

export default rootReducer;