import { PageContainer, ProCard} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer header={{title: false}}>
      <ProCard title="因子看板">
      <h1 className="mt-10 !text-3xl font-bold underline">
      Hello world!
    </h1>
      </ProCard>
    </PageContainer>
  );
};

export default Welcome;
