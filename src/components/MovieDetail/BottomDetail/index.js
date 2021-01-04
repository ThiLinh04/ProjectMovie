import React from 'react';

import {
  BottomDetailFirst,
  BottomDetailSecond,
  BottomDetailThird,
} from 'containers';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const BottomDetail = () => {
  return (
    <div className="bottom__info">
      <Tabs defaultActiveKey="1" centered className="bottom__info__content">
        <TabPane tab="Lịch Chiếu" key="1">
          <BottomDetailFirst />
        </TabPane>
        <TabPane tab="Thông Tin" key="2">
          <BottomDetailSecond />
        </TabPane>
        <TabPane tab="Đánh Giá" key="3">
          <BottomDetailThird />
        </TabPane>
        {/* </div> */}
      </Tabs>
    </div>
  );
};

export default BottomDetail;
