// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

// import { movieDetail } from "../../core/redux/actions/movieList";
// import { createAction } from "../../core/redux/actions";

// import Schedule from "./schedule/schedule";
// import DetailItem from "./DetailItem/DetailItem";
// import DetailInfo from "./DetailInfo/DetailInfo";

// import "./style.scss";

// class DetailMovie extends Component {
//   state = {
//     active: false,
//   };

//   handleHeThongRap = (item) => {
//     this.props.dispatch(createAction("RENDER_CUM_RAP", item));
//   };
//   handleLichChieuPhim = (id) => {
//     this.props.dispatch(createAction("RENDER_LICH_CHIEU_PHIM", id));
//   };
//   render() {
//     return (
//       <>
//         <div
//           style={{
//             backgroundImage: `url(${this.props.movieDetails.hinhAnh})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: 600,
//             position: "relative",
//           }}
//         >
//           <div className="overlay"></div>
//           <div className="container" style={{ padding: "5rem" }}>
//             <div className="row">
//               <div className="col-sm-4 col-md-4 text-center">
//                 <img
//                   width="100%"
//                   height="400px"
//                   src={this.props.movieDetails.hinhAnh}
//                   alt="13 reason why"
//                   style={{ border: "1px solid black" }}
//                 />
//               </div>
//               <div className="col-sm-8 col-md-8">
//                 <h1 className="text-danger">
//                   {this.props.movieDetails.tenPhim}
//                 </h1>
//                 <p className="text-white">
//                   <span className="text-danger">Giới thiệu:</span>{" "}
//                   {this.props.movieDetails.moTa}
//                 </p>
//                 <p className="text-white">
//                   <span className="text-danger">Ngày khởi chiếu:</span>
//                   {this.props.movieDetails.ngayKhoiChieu.substr(0, 10)}
//                 </p>
//                 <button
//                   data-toggle="modal"
//                   data-target="#modelMovie"
//                   className="btn btn-success"
//                 >
//                   Trailer
//                 </button>

//                 <button className="btn btn-success ml-2">
//                   <Link
//                     to={`/selectchair/${this.props.movieDetails.maPhim}`}
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     MUA VÉ
//                   </Link>
//                 </button>
//               </div>
//             </div>
//             <div className="modal fade" id="modelMovie">
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <iframe
//                     width={790}
//                     height={515}
//                     src={this.props.movieDetails.trailer}
//                     frameBorder={0}
//                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=" infor">
//           <ul className="nav nav-pills text-center ">
//             <li className="nav-item">
//               <a className="nav-link active" data-toggle="pill" href="#home">
//                 Lịch Chiếu
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" data-toggle="pill" href="#info">
//                 Thông tin
//               </a>
//             </li>
//           </ul>
//           <div className="tab-content">
//             <div className="tab-pane container active" id="home">
//               <div
//                 id="muave"
//                 className="container mb-5 mt-4 "
//                 style={{ backgroundColor: "bisque", height: 500 }}
//               >
//                 <div className="row ">
//                   <div className="col-sm-4 scroll">
//                     <ul style={{ listStyle: "none" }}>
//                       {this.props.movieDetails.heThongRapChieu.map(
//                         (item, index) => (
//                           <li
//                             key={index}
//                             className="my-4 d-flex py-4 "
//                             style={{
//                               lineHeight: "70px",
//                               borderBottom: "0.5px solid gray",
//                               cursor: "pointer",
//                             }}
//                             onClick={() => {
//                               this.handleHeThongRap(item);
//                             }}
//                           >
//                             <img height="70px" src={item.logo} alt="" />
//                             <span className="ml-3 font-weight-bold">
//                               {item.tenHeThongRap}
//                             </span>
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   </div>
//                   <div className="col-sm-8">
//                     <DetailItem />
//                     <Schedule />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="tab-pane container fade" id="info">
//               <DetailInfo />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
//   componentDidMount() {
//     //react-router-dom khi gắn vào route: hỗ trợ 3 props: history, loction, match
//     this.props.dispatch(movieDetail(this.props.match.params.id));
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     // nếu movieDetail ban đầu null thì gắn mảng rỗng
//     movieDetails: state.movie.movieDetail || {
//       maPhim: "",
//       tenPhim: "",
//       hinhAnh: "",
//       moTa: "",
//       ngayKhoiChieu: "",
//       trailer: "",
//       heThongRapChieu: [],
//     },
//   };
// };
// export default connect(mapStateToProps)(DetailMovie);

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import './index.scss';

import { flimDetail } from 'core/redux/actions/movieList';

import { TopDetailContainer, BottomDetailContainer } from 'containers';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flimDetail(id));
  }, [dispatch, id]);

  return (
    <div className="wrapper">
      <div
        className="wrapper__section"
        style={{ backgroundColor: 'rgb(10, 32, 41)' }}
      >
        <div className="wrapper__section__top">
          <TopDetailContainer />
        </div>
        <div className="wrapper__section__bottom">
          <BottomDetailContainer />
        </div>
      </div>
    </div>
  );
};

export default Detail;
