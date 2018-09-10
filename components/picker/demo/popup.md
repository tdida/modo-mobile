---
order: 3
title:
  zh-CN: 弹出展示
  en-US: Display in Popup
---

```jsx
import { Picker, List } from 'modo-mobile';

const district = [
  {
    value: '340000',
    label: '安徽省',
    children: [
      {
        value: '341500',
        label: '六安市',
        children: [
          {
            value: '341522',
            label: '霍邱县',
            children: [],
          },
          {
            value: '341502',
            label: '金安区',
            children: [],
          },
          {
            value: '341524',
            label: '金寨县',
            children: [],
          },
          {
            value: '341526',
            label: '其它区',
            children: [],
          },
          {
            value: '341521',
            label: '寿县',
            children: [],
          },
          {
            value: '341523',
            label: '舒城县',
            children: [],
          },
          {
            value: '341503',
            label: '裕安区',
            children: [],
          },
        ],
      },
      {
        value: '340500',
        label: '马鞍山市',
        children: [
          {
            value: '340506',
            label: '博望区',
            children: [],
          },
        ],
      },
      {
        value: '341800',
        label: '宣城市',
        children: [
          {
            value: '341822',
            label: '广德县',
            children: [],
          },
          {
            value: '341824',
            label: '绩溪县',
            children: [],
          },
          {
            value: '341825',
            label: '旌德县',
            children: [],
          },
        ],
      },
    ],
  },
  {
    value: '820000',
    label: '澳门特别行政区',
    children: [
      {
        value: '820100',
        label: '澳门半岛',
        children: [],
      },
      {
        value: '820200',
        label: '离岛',
        children: [],
      },
    ],
  },
  {
    value: '110000',
    label: '北京',
    children: [
      {
        value: '110100',
        label: '北京市',
        children: [
          {
            value: '110114',
            label: '昌平区',
            children: [],
          },
          {
            value: '110105',
            label: '朝阳区',
            children: [],
          },
          {
            value: '110103',
            label: '崇文区',
            children: [],
          },
          {
            value: '110115',
            label: '大兴区',
            children: [],
          },
          {
            value: '110101',
            label: '东城区',
            children: [],
          },
          {
            value: '110111',
            label: '房山区',
            children: [],
          },
          {
            value: '110106',
            label: '丰台区',
            children: [],
          },
          {
            value: '110108',
            label: '海淀区',
            children: [],
          },
          {
            value: '110116',
            label: '怀柔区',
            children: [],
          },
          {
            value: '110109',
            label: '门头沟区',
            children: [],
          },
          {
            value: '110228',
            label: '密云县',
            children: [],
          },
          {
            value: '110117',
            label: '平谷区',
            children: [],
          },
          {
            value: '110230',
            label: '其它区',
            children: [],
          },
          {
            value: '110107',
            label: '石景山区',
            children: [],
          },
          {
            value: '110113',
            label: '顺义区',
            children: [],
          },
          {
            value: '110112',
            label: '通州区',
            children: [],
          },
          {
            value: '110102',
            label: '西城区',
            children: [],
          },
          {
            value: '110104',
            label: '宣武区',
            children: [],
          },
          {
            value: '110229',
            label: '延庆县',
            children: [],
          },
        ],
      },
    ],
  },
];

const data = [
  [
    { label: '2015', value: 1 },
    { label: '2016', value: 2 },
    { label: '2017', value: 3 },
    { label: '2018', value: 4 },
    { label: '2019', value: 5 },
  ],
  [
    { label: '春', value: 1 },
    { label: '夏', value: 2 },
    { label: '秋', value: 3 },
    { label: '冬', value: 4 },
  ],
];

const CustomPop = ({ title, children, onClick }) => (
  <div style={{ padding: '10px 16px' }} onClick={onClick}>
    <span>{title}</span>
    <span>: </span>
    <span>{children}</span>
  </div>
);

class App extends React.Component {
  state = {
    value: ['820000', '820200', ''],
    valueTime: [],
  };

  handleChange = value => {
    this.setState({ value });
  };

  handleTimeChange = value => {
    this.setState({ valueTime: value });
  };

  onColumnChange = (val, index) => {
    console.log(val, index);
  };

  render() {
    const { value, valueTime } = this.state;

    return (
      <div>
        <Picker title="自定义弹出" data={data} cols={2} defaultValue={[1, 1]}>
          <CustomPop title="自定义弹出" />
        </Picker>
        <List>
          <Picker
            title="选择时间"
            data={data}
            cols={2}
            value={valueTime}
            onChange={this.handleTimeChange}
          >
            <List.Item title="选择时间" />
          </Picker>
          <Picker title="禁用选择" data={data} cols={3} disabled defaultValue={[1, 1]}>
            <List.Item title="禁用选择" />
          </Picker>
          <Picker
            title="选择城市"
            data={district}
            cascade
            cols={3}
            value={value}
            onChange={this.handleChange}
            onColumnChange={this.onColumnChange}
          >
            <List.Item title="选择城市" />
          </Picker>
        </List>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
