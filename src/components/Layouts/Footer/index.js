import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer__content">
      <div className="footer__first">
        <div className=" title__content">
          <div className="title__content--name">TIX</div>
          <div className="title__content--link">
            <div className="link__text">
              <Link to="/faq" className="link">
                FAQ
              </Link>
              <Link className="link" to="#">
                Brand Guidelines
              </Link>
            </div>
            <div className="link__text">
              <Link className="link" to="#">
                Thỏa thuận sử dụng
              </Link>
              <Link className="link" to="#">
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
        {/* Đối tác */}
        <div className="partner">
          <div className="title">ĐỐI TÁC</div>
          <div className="linePartner">
            <Link to="https://www.cgv.vn/" title="CGV">
              <img
                className="iconConnect"
                src="/image/cgv.png"
                style={{ backgroundColor: '#fff' }}
                alt=""
              />
            </Link>
            <Link to="http://bhdstar.vn" title="BHD">
              <img className="iconConnect" src="/image/bhd.png" alt="" />
            </Link>
            <Link to="http://galaxycine.vn" title="Galaxy">
              <img className="iconConnect" src="/image/galaxycine.png" alt="" />
            </Link>
            <Link to="http://cinestar.com.vn" title="Cinestar">
              <img className="iconConnect" src="/image/cinestar.png" alt="" />
            </Link>
            <Link to="http://lottecinemavn.com" title="Lotte Cinema">
              <img
                alt=""
                className="iconConnect"
                src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
              />
            </Link>
          </div>
          <div className="linePartner">
            <Link to="https://www.megagscinemas.vn" title="MegaGS">
              <img className="iconConnect" src="/image/megags.png" alt="" />
            </Link>
            <Link to="https://www.betacineplex.vn/" title="Beta">
              <img className="iconConnect" src="/image/bt.jpg" alt="" />
            </Link>
            <Link to="http://ddcinema.vn" title="DDC">
              <img
                className="iconConnect"
                src="/image/dongdacinema.png"
                alt=""
              />
            </Link>
            <Link to="https://touchcinema.com/" title="Touch Cinema">
              <img className="iconConnect" src="/image/TOUCH.png" alt="" />
            </Link>
            <Link to="https://cinemaxvn.com/" title="Cinemax">
              <img className="iconConnect" src="/image/cnx.jpg" alt="" />
            </Link>
          </div>
          <div className=" linePartner">
            <Link to="http://starlight.vn/" title="Starlight">
              <img className="iconConnect" src="/image/STARLIGHT.png" alt="" />
            </Link>
            <Link to="https://www.dcine.vn/" title="Dcine">
              <img className="iconConnect" src="/image/dcine.png" alt="" />
            </Link>
            <Link to="https://zalopay.vn/" title="ZaloPay">
              <img
                className="iconConnect"
                src="/image/zalopay_icon.png"
                alt=""
              />
            </Link>
            <Link to="https://www.payoo.vn/" title="Payoo">
              <img className="iconConnect" src="/image/payoo.jpg" alt="" />
            </Link>
            <Link to="https://www.vietcombank.com.vn/" title="Vietcombank">
              <img className="iconConnect" src="/image/VCB.png" alt="" />
            </Link>
          </div>
          <div className="linePartner">
            <Link to="http://www.agribank.com.vn/" title="Agribank">
              <img className="iconConnect" src="/image/AGRIBANK.png" alt="" />
            </Link>
            <Link to="https://www.vietinbank.vn/" title="Vietinbank">
              <img
                className="iconConnect"
                src="/image/VIETTINBANK.png"
                alt=""
              />
            </Link>
            <Link to="https://www.indovinabank.com.vn/" title="IVB">
              <img className="iconConnect" src="/image/IVB.png" alt="" />
            </Link>
            <Link to="http://123go.vn" title="123Go">
              <img className="iconConnect" src="/image/123go.png" alt="" />
            </Link>
            <Link to="http://laban.vn" title="La Bàn">
              <img className="iconConnect" src="/image/laban.png" alt="" />
            </Link>
          </div>
        </div>
        {/* App */}
        <div className="application">
          <div className="hideOnMobile">
            <div className="title">MOBILE APP</div>
            <div className="logo__app">
              <Link
                to="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                title="Apple App"
              >
                <img className="iconApp" src="/image/apple-logo.png" alt="" />
              </Link>
              <Link
                to="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                title="Android App"
              >
                <img className="iconApp" src="/image/android-logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="hideOnMobile">
            <div className="title">SOCIAL</div>
            <div className="logo__app">
              <Link
                to="https://www.facebook.com/tix.vn/"
                title="Facebook social"
              >
                <img
                  className="iconApp"
                  src="/image/facebook-logo.png"
                  alt=""
                />
              </Link>
              <Link to="https://zalo.me/tixdatve" title="Zalo social">
                <img className="iconApp" src="/image/zalo-logo.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hrFooter" />
      <div className="footer__last">
        <div className="footer__last--imgFooter">
          <img
            className="vngIcon"
            src="/image/zion-logo.jpg"
            style={{ borderRadius: 8 }}
            alt=""
          />
        </div>
        <div className="footer__last--infoFooter">
          <span className="infoFooter--title">
            TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
          </span>
          <span>
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
          </span>
          <span>
            Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay đổi
            lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành
            phố Hồ Chí Minh cấp.
          </span>
          <span>
            Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
            <br />
            Email:{' '}
            <Link to="mailto:support@tix.vn" style={{ color: '#FB4226' }}>
              support@phim.vn
            </Link>
          </span>
        </div>
        <div className="footer__last--imgFooter">
          <Link to="http://online.gov.vn/Home/WebDetails/62782">
            <img
              className="imgBoCo"
              // alt="Bộ Công Thương"
              // title
              alt=""
              src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
