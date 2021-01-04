/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Select } from 'antd';

import { useDispatch } from 'react-redux';
import { searchMovieId } from '../../core/redux/actions/search';

// form
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
};

const renderDefaultOption = ({ label }) => {
  return <Option disabled>{label}</Option>;
};

const SearchMovie = (props) => {
  const { listNameMovie, systemTheater } = props;

  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState({
    isFilm: false,
    isTheater: false,
    isDate: false,
  });
  const [selectValues, setSelectValues] = useState([]);
  const [form] = Form.useForm();

  // console.log('selected values: ', selectValues);

  const onFinish = () => {
    // console.log(values);
  };

  const convertToDate = (str) => {
    if (!str) return '';
    const dateRex = /[0-9]{4}-[0-9]{2}\-[0-9]{2}/g;

    return str.match(dateRex)[0];
  };

  const convertToHours = (str) => {
    if (!str) return '';
    const hourRex = /[0-9]{2}\:[0-9]{2}/g;

    return str.match(hourRex)[0];
  };

  // getMaPhim
  const handleGetCodeFilm = (values) => {
    if (values) setIsSelected({ ...isSelected, isFilm: true });
    else setIsSelected({ ...isSelected, isFilm: false });

    setSelectValues({ ...selectValues, phim: values });
    dispatch(searchMovieId(values));
  };

  const handleSelectTheaterChange = (values) => {
    if (values) setIsSelected({ ...isSelected, isTheater: true });
    else setIsSelected({ ...isSelected, isTheater: false });

    setSelectValues({ ...selectValues, rap: values });
  };

  const handleSelectDateChange = (values) => {
    if (values) setIsSelected({ ...isSelected, isDate: true });
    else setIsSelected({ ...isSelected, isDate: false });

    setSelectValues({ ...selectValues, ngayXem: values });
  };

  const handleSelectHoursChange = (values) => {
    setSelectValues({ ...selectValues, suatChieu: values });
  };

  // render name film
  const renderNameFilm = () => {
    return listNameMovie.map((item, index) => {
      return (
        <Option value={item.maPhim} key={index}>
          {item.tenPhim}
        </Option>
      );
    });
  };

  // render cum rap
  const renderMovieTheater = () => {
    if (!isSelected.isFilm)
      return renderDefaultOption({ label: 'Vui long chon rap' });

    return systemTheater.map(({ cumRapChieu = [] }) => {
      return cumRapChieu.map((cumRap, index) => {
        return (
          <Option
            value={cumRap.maCumRap}
            disabled={cumRap.maCumRap === 'default'}
            key={index}
          >
            {cumRap.tenCumRap}
          </Option>
        );
      });
    });
  };

  // render ngay chieu
  const renderDayTheater = () => {
    if (!isSelected.isTheater)
      return renderDefaultOption({ label: 'Vui long chon rap voi phim ' });

    return systemTheater.map(({ cumRapChieu = [] }) => {
      return cumRapChieu.map(({ lichChieuPhim = [] }) => {
        return lichChieuPhim.map((item, index) => {
          return (
            <Option value={item.maLichChieu} key={index}>
              {convertToDate(item.ngayChieuGioChieu)}
            </Option>
          );
        });
      });
    });
  };

  // render ngay chieu
  const renderSlot = () => {
    if (!isSelected.isDate)
      return renderDefaultOption({
        label: 'Vui lòng chọn phim, rạp và ngày xem',
      });

    return systemTheater.map(({ cumRapChieu = [] }) => {
      return cumRapChieu.map(({ lichChieuPhim = [] }) => {
        return lichChieuPhim.map((item, index) => {
          return (
            <Option value={item.maLichChieu} key={index}>
              {convertToHours(item.ngayChieuGioChieu)}
            </Option>
          );
        });
      });
    });
  };

  return (
    <div className="search">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item rules={[{ required: true }]}>
          <Form.Item
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(25%)' }}
          >
            <Select
              placeholder="Phim"
              allowClear
              onChange={(value) => handleGetCodeFilm(value)}
            >
              {renderNameFilm()}
            </Select>
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: 'calc(25%)',
            }}
          >
            <Select
              placeholder="Rạp"
              allowClear
              onChange={(value) => handleSelectTheaterChange(value)}
            >
              {renderMovieTheater()}
            </Select>
          </Form.Item>

          <Form.Item
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(15%)' }}
          >
            <Select
              placeholder="Ngày xem"
              onChange={(values) => handleSelectDateChange(values)}
              allowClear
            >
              {renderDayTheater()}
            </Select>
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: 'calc(15% )',
            }}
          >
            <Select
              placeholder="Suất Chiếu"
              allowClear
              onChange={(values) => handleSelectHoursChange(values)}
            >
              {/* <Option value="male">10:00</Option>
              <Option value="female">12:00</Option>
              <Option value="other">19:00</Option> */}
              {renderSlot()}
            </Select>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', width: 'calc(15% )' }}>
            <Button type="primary" htmlType="submit">
              MUA VÉ
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SearchMovie;

// const { listNameMovie, systemTheater } = props;
SearchMovie.propTypes = {
  listNameMovie: PropTypes.arrayOf(PropTypes.any),
  systemTheater: PropTypes.arrayOf(PropTypes.any),
};

SearchMovie.defaultProps = {
  listNameMovie: [],
  systemTheater: [],
};
