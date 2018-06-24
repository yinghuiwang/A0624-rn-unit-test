#rn-unit-test
## Jest+Enzyme+storybook

[demo](http://)

### 配置

#### Jest配置

[Jest](https://facebook.github.io/jest/docs/en/api.html)

##### 1. 安装

[Jest](https://facebook.github.io/jest/docs/en/api.html)在[React Native](https://reactnative.cn/docs/0.51/getting-started.html)利用`react-native init AwesomeProject`创建项目的时候就会默认安装了，这里就不多介绍了。

> 在你使用 [`create-react-app`](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) 或 [`react-native init`](http://facebook.github.io/react-native/docs/getting-started.html) 创建你的 React 或 React Native 项目时，Jest 都已经被配置好并可以使用了。在 `__tests__`文件夹下放置你的测试用例，或者使用 `.spec.js` 或 `.test.js` 后缀给它们命名。不管你选哪一种方式，Jest 都能找到并且运行它们。

#### Enzyme配置

[Enzyme](http://airbnb.io/enzyme/)

##### 1. 安装

```shell
yarn add enzyme enzyme-adapter-react-16 --dev
```

> 每个适配器可能还有其他的对等体依赖关系，您也需要安装它们。举例来说， `enzyme-adapter-react-16`对应用同版本的依赖`react@16`，`react-dom@16`和`react-test-renderer@16`。

##### 2. 初始化配置 

由于React Native有很多环境依赖性，如果没有主机设备，很难模拟。所以还需要添加[react-native-mock](http://airbnb.io/enzyme/docs/guides/react-native.html)，如下

```shell
yarn add react-native-mock --dev
```

##### 3. 初始化配置

做后需要配置enzyme的适配器，一个一般要根据react的版本配置，现在项目中用的是react@16，所以如下配置

```javascript
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native-mock/mock';

Enzyme.configure({ adapter: new Adapter() });

```

还需要让此配置，在所以test之前执行，进行如下设置

```javascript
// package.json
// ...
{
    "jest": {
       // ...
       "setupFiles": [
         "<rootDir>/__tests__/Setup"
       ]
     }
}
// ...
```

#### Storybook配置

[Storybook](https://storybook.js.org)

##### 1. 安装

执行下面三条指令就能完成安装

```shell
cd my-project-directory
npm i -g @storybook/cli
getstorybook
```

##### 2. 运行

```shell
npm run storybook
```

### 运行

#### Jest 运行

1. 运行全部测试用例

   ```Sh
   npm jest
   ```

2. 运行单个测试用例，可以借助webstorm工具，来运行，非常方便

   ![](https://ws1.sinaimg.cn/large/006tKfTcgy1fs6b6zh63bj31kw11ktn3.jpg)

#### Storybook运行

1. 在开发组件的时候要把storybook运行起来，并写stories

   ```shell
   npm run storybook
   ```

### 用例

#### Jest 常用api用法实例

|                             中文                             |                             英文                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|  [匹配器](http://www.cnblogs.com/Wolfmanlq/p/8018370.html)   | [Matchers](https://facebook.github.io/jest/docs/en/using-matchers.html) |
| [测试异步代码](http://www.cnblogs.com/Wolfmanlq/p/8017021.html) | [Asynchronous](https://facebook.github.io/jest/docs/en/asynchronous.html) |
|  [模拟器](http://www.cnblogs.com/Wolfmanlq/p/8025329.html)   | [Mock Functions](https://facebook.github.io/jest/docs/en/mock-functions.html) |
| [全局函数](http://www.cnblogs.com/Wolfmanlq/p/8032278.html)  | [Global Functions](https://facebook.github.io/jest/docs/en/setup-teardown.html) |

#### API集合

##### 全局方法

- [`afterAll(fn, timeout)`](https://facebook.github.io/jest/docs/en/api#afterallfn-timeout)
- [`afterEach(fn, timeout)`](https://facebook.github.io/jest/docs/en/api#aftereachfn-timeout)
- [`beforeAll(fn, timeout)`](https://facebook.github.io/jest/docs/en/api#beforeallfn-timeout)
- [`beforeEach(fn, timeout)`](https://facebook.github.io/jest/docs/en/api#beforeeachfn-timeout)
- [`describe(name, fn)`](https://facebook.github.io/jest/docs/en/api#describename-fn)
- [`describe.each(table)(name, fn)`](https://facebook.github.io/jest/docs/en/api#describeeachtable-name-fn)
- [`describe.only(name, fn)`](https://facebook.github.io/jest/docs/en/api#describeonlyname-fn)
- [`describe.only.each(table)(name, fn)`](https://facebook.github.io/jest/docs/en/api#describeonlyeachtable-name-fn)
- [`describe.skip(name, fn)`](https://facebook.github.io/jest/docs/en/api#describeskipname-fn)
- [`describe.skip.each(table)(name, fn)`](https://facebook.github.io/jest/docs/en/api#describeskipeachtable-name-fn)
- [`require.requireActual(moduleName)`](https://facebook.github.io/jest/docs/en/api#requirerequireactualmodulename)
- [`require.requireMock(moduleName)`](https://facebook.github.io/jest/docs/en/api#requirerequiremockmodulename)
- [`test(name, fn, timeout)`](https://facebook.github.io/jest/docs/en/api#testname-fn-timeout)
- [`test.each(table)(name, fn)`](https://facebook.github.io/jest/docs/en/api#testeachtable-name-fn)
- [`test.only(name, fn, timeout)`](https://facebook.github.io/jest/docs/en/api#testonlyname-fn-timeout)
- [`test.only.each(table)(name, fn)`](https://facebook.github.io/jest/docs/en/api#testonlyeachtable-name-fn)
- [`test.skip(name, fn)`](https://facebook.github.io/jest/docs/en/api#testskipname-fn)
- [`test.skip.each(table)(name, fn)`](https://facebook.github.io/jest/docs/en/api#testskipeachtable-name-fn)

##### 匹配器

- [`expect(value)`](https://facebook.github.io/jest/docs/en/expect#expectvalue)
- [`expect.extend(matchers)`](https://facebook.github.io/jest/docs/en/expect#expectextendmatchers)
- [`expect.anything()`](https://facebook.github.io/jest/docs/en/expect#expectanything)
- [`expect.any(constructor)`](https://facebook.github.io/jest/docs/en/expect#expectanyconstructor)
- [`expect.arrayContaining(array)`](https://facebook.github.io/jest/docs/en/expect#expectarraycontainingarray)
- [`expect.assertions(number)`](https://facebook.github.io/jest/docs/en/expect#expectassertionsnumber)
- [`expect.hasAssertions()`](https://facebook.github.io/jest/docs/en/expect#expecthasassertions)
- [`expect.not.arrayContaining(array)`](https://facebook.github.io/jest/docs/en/expect#expectnotarraycontainingarray)
- [`expect.not.objectContaining(object)`](https://facebook.github.io/jest/docs/en/expect#expectnotobjectcontainingobject)
- [`expect.not.stringContaining(string)`](https://facebook.github.io/jest/docs/en/expect#expectnotstringcontainingstring)
- [`expect.not.stringMatching(string | regexp)`](https://facebook.github.io/jest/docs/en/expect#expectnotstringmatchingstring-regexp)
- [`expect.objectContaining(object)`](https://facebook.github.io/jest/docs/en/expect#expectobjectcontainingobject)
- [`expect.stringContaining(string)`](https://facebook.github.io/jest/docs/en/expect#expectstringcontainingstring)
- [`expect.stringMatching(string | regexp)`](https://facebook.github.io/jest/docs/en/expect#expectstringmatchingstring-regexp)
- [`expect.addSnapshotSerializer(serializer)`](https://facebook.github.io/jest/docs/en/expect#expectaddsnapshotserializerserializer)
- [`.not`](https://facebook.github.io/jest/docs/en/expect#not)
- [`.resolves`](https://facebook.github.io/jest/docs/en/expect#resolves)
- [`.rejects`](https://facebook.github.io/jest/docs/en/expect#rejects)
- [`.toBe(value)`](https://facebook.github.io/jest/docs/en/expect#tobevalue)
- [`.toHaveBeenCalled()`](https://facebook.github.io/jest/docs/en/expect#tohavebeencalled)
- [`.toHaveBeenCalledTimes(number)`](https://facebook.github.io/jest/docs/en/expect#tohavebeencalledtimesnumber)
- [`.toHaveBeenCalledWith(arg1, arg2, ...)`](https://facebook.github.io/jest/docs/en/expect#tohavebeencalledwitharg1-arg2-)
- [`.toHaveBeenLastCalledWith(arg1, arg2, ...)`](https://facebook.github.io/jest/docs/en/expect#tohavebeenlastcalledwitharg1-arg2-)
- [`.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)`](https://facebook.github.io/jest/docs/en/expect#tohavebeennthcalledwithnthcall-arg1-arg2-)
- [`.toHaveReturned()`](https://facebook.github.io/jest/docs/en/expect#tohavereturned)
- [`.toHaveReturnedTimes(number)`](https://facebook.github.io/jest/docs/en/expect#tohavereturnedtimesnumber)
- [`.toHaveReturnedWith(value)`](https://facebook.github.io/jest/docs/en/expect#tohavereturnedwithvalue)
- [`.toHaveLastReturnedWith(value)`](https://facebook.github.io/jest/docs/en/expect#tohavelastreturnedwithvalue)
- [`.toHaveNthReturnedWith(nthCall, value)`](https://facebook.github.io/jest/docs/en/expect#tohaventhreturnedwithnthcall-value)
- [`.toBeCloseTo(number, numDigits)`](https://facebook.github.io/jest/docs/en/expect#tobeclosetonumber-numdigits)
- [`.toBeDefined()`](https://facebook.github.io/jest/docs/en/expect#tobedefined)
- [`.toBeFalsy()`](https://facebook.github.io/jest/docs/en/expect#tobefalsy)
- [`.toBeGreaterThan(number)`](https://facebook.github.io/jest/docs/en/expect#tobegreaterthannumber)
- [`.toBeGreaterThanOrEqual(number)`](https://facebook.github.io/jest/docs/en/expect#tobegreaterthanorequalnumber)
- [`.toBeLessThan(number)`](https://facebook.github.io/jest/docs/en/expect#tobelessthannumber)
- [`.toBeLessThanOrEqual(number)`](https://facebook.github.io/jest/docs/en/expect#tobelessthanorequalnumber)
- [`.toBeInstanceOf(Class)`](https://facebook.github.io/jest/docs/en/expect#tobeinstanceofclass)
- [`.toBeNull()`](https://facebook.github.io/jest/docs/en/expect#tobenull)
- [`.toBeTruthy()`](https://facebook.github.io/jest/docs/en/expect#tobetruthy)
- [`.toBeUndefined()`](https://facebook.github.io/jest/docs/en/expect#tobeundefined)
- [`.toContain(item)`](https://facebook.github.io/jest/docs/en/expect#tocontainitem)
- [`.toContainEqual(item)`](https://facebook.github.io/jest/docs/en/expect#tocontainequalitem)
- [`.toEqual(value)`](https://facebook.github.io/jest/docs/en/expect#toequalvalue)
- [`.toHaveLength(number)`](https://facebook.github.io/jest/docs/en/expect#tohavelengthnumber)
- [`.toMatch(regexpOrString)`](https://facebook.github.io/jest/docs/en/expect#tomatchregexporstring)
- [`.toMatchObject(object)`](https://facebook.github.io/jest/docs/en/expect#tomatchobjectobject)
- [`.toHaveProperty(keyPath, value)`](https://facebook.github.io/jest/docs/en/expect#tohavepropertykeypath-value)
- [`.toMatchSnapshot(propertyMatchers, snapshotName)`](https://facebook.github.io/jest/docs/en/expect#tomatchsnapshotpropertymatchers-snapshotname)
- [`.toStrictEqual(value)`](https://facebook.github.io/jest/docs/en/expect#tostrictequalvalue)
- [`.toThrow(error)`](https://facebook.github.io/jest/docs/en/expect#tothrowerror)
- [`.toThrowErrorMatchingSnapshot()`](https://facebook.github.io/jest/docs/en/expect#tothrowerrormatchingsnapshot)

#### Enzyme 常用api用法实例

enzyme有3种渲染方式：`render`、`mount`、`shallow`，先了解下区别。

##### `render`、`mount`、`shallow`的区别

render采用的是第三方库`Cheerio`的渲染，渲染结果是普通的html结构，对于snapshot使用`render`比较合适。

shallow和mount对组件的渲染结果不是html的dom树，而是react树，如果你chrome装了react devtool插件，他的渲染结果就是react devtool tab下查看的组件结构，而`render`函数的结果是element tab下查看的结果。

这些只是渲染结果上的差别，更大的差别是shallow和mount的结果是个被封装的`ReactWrapper`，可以进行多种操作，譬如`find()、parents()、children()`等选择器进行元素查找；`state()、props()`进行数据查找，`setState()、setprops()`操作数据；`simulate()`模拟事件触发。

shallow只渲染当前组件，只能能对当前组件做断言；mount会渲染当前组件以及所有子组件，对所有子组件也可以做上述操作。一般交互测试都会关心到子组件，我使用的都是`mount`。但是mount耗时更长，内存啥的也都占用的更多，如果没必要操作和断言子组件，可以使用shallow。

##### 交互测试

主要利用`simulate()`接口模拟事件，实际上simulate是通过触发事件绑定函数，来模拟事件的触发。触发事件后，去判断props上特定函数是否被调用，传参是否正确；组件状态是否发生预料之中的修改；某个dom节点是否存在是否符合期望。

##### [官方api](http://airbnb.io/enzyme/docs/api/)

- [`.find(selector) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html)
- [`.findWhere(predicate) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/findWhere.html)
- [`.filter(selector) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/filter.html)
- [`.filterWhere(predicate) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/filterWhere.html)
- [`.hostNodes() => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/hostNodes.md)
- [`.contains(nodeOrNodes) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/contains.html)
- [`.containsMatchingElement(node) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/containsMatchingElement.html)
- [`.containsAllMatchingElements(nodes) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/containsAllMatchingElements.html)
- [`.containsAnyMatchingElements(nodes) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/containsAnyMatchingElements.html)
- [`.equals(node) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/equals.html)
- [`.matchesElement(node) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/matchesElement.html)
- [`.hasClass(className) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/hasClass.html)
- [`.is(selector) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/is.html)
- [`.exists() => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/exists.html)
- [`.isEmpty() => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/isEmpty.html)
- [`.isEmptyRender() => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/isEmptyRender.md)
- [`.not(selector) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/not.html)
- [`.children() => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/children.html)
- [`.childAt(index) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/childAt.html)
- [`.parents() => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/parents.html)
- [`.parent() => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/parent.html)
- [`.closest(selector) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/closest.html)
- [`.shallow([options\]) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html)
- [`.render() => CheerioWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/render.html)
- [`.unmount() => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/unmount.html)
- [`.text() => String`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/text.html)
- [`.html() => String`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/html.html)
- [`.get(index) => ReactElement`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/get.html)
- [`.getNode() => ReactElement`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/getNode.md)
- [`.getNodes() => Array`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/getNodes.md)
- [`.at(index) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/at.html)
- [`.first() => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/first.html)
- [`.last() => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/last.html)
- [`.state([key\]) => Any`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html)
- [`.context([key\]) => Any`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/context.html
- [`.props() => Object`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html)
- [`.prop(key) => Any`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/prop.html)
- [`.key() => String`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/key.html)
- [`.simulate(event[, data\]) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html)

- [`.setState(nextState) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/setState.html)

- [`.setProps(nextProps) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/setProps.html)

- [`.setContext(context) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/setContext.html)

- [`.instance() => ReactComponent`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/instance.html)

- [`.update() => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/update.html)

- [`.debug() => String`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/debug.html)

- [`.type() => String|Function`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/type.html)

- [`.name() => String`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/name.html)

- [`.forEach(fn) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/forEach.html)

- [`.map(fn) => Array`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/map.html)

- [`.reduce(fn[, initialValue\]) => Any`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/reduce.html)

- [`.reduceRight(fn[, initialValue\]) => Any`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/reduceRight.html)

- [`.slice([begin[, end\]]) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/slice.html)

- [`.tap(intercepter) => Self`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/tap.html)

- [`.some(selector) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/some.html)

- [`.someWhere(predicate) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/someWhere.html)

- [`.every(selector) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/every.html)

- [`.everyWhere(predicate) => Boolean`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/everyWhere.html)

- [`.dive([options]) => ShallowWrapper`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/dive.html)

#### 组件测试

1. 用storybook做组件测试，既可以存储组件快照，也可以快速查看组件样式

   例如：

   ```js
   // 
   import React from 'react';
   import { storiesOf } from '@storybook/react-native';
   import { action } from '@storybook/addon-actions';
   import { linkTo } from '@storybook/addon-links';
   import * as img from './img';
   
   import ImageButton from './ImageButton';
   
   storiesOf('<ImageButton />', module)
     .add('normal', () =>
       <ImageButton
         title={'确认'}
         imageName={img.ICON_DENE}
         onPress={action('点击')}
       />
     )
     .add('cancel', () =>
       <ImageButton
         title={'取消'}
         imageName={img.ICON_CANCEL}
         onPress={action('点击')}
       />
     )
   ;
   ```

2. 效果图如下

   <img src="https://ws3.sinaimg.cn/large/006tNc79ly1fsm0q25pc7j30mc17wacc.jpg" width="20%" /><img src="https://ws3.sinaimg.cn/large/006tNc79ly1fsm0ruulcaj30mc17w400.jpg" width="20%" /><img src="https://ws4.sinaimg.cn/large/006tNc79ly1fsm0s32d4mj30mc17wgn4.jpg" width="20%" /><img src="https://ws3.sinaimg.cn/large/006tNc79ly1fsm0suxkvxj31cc18maix.jpg" width="20%"/>
3. 根据组件的需要，进行一些函数的测试，如下

   ```javascript
   // imageButton.test.js
   import 'react-native'
   import React from 'react';
   import { mount, shallow } from 'enzyme';
   import ImageButton from '../../src/components/ImageButton';
   
   test('<ImageButton/>', () => {
     let i = 0
     const onPress = () => i++
     const wrapper = shallow(<ImageButton title={'1'} imageName={null} onPress={onPress}/>);
     expect(wrapper.instance().props.title).toBe('1'); // uses the right handler
     expect(wrapper.prop('onPress')).toBe(onPress)
     expect(i).toBe(0);
     wrapper.simulate('press');
     expect(i).toBe(1);
   });
   ```


#### API测试

1. API测试主要进行，返回状态码（200、500、502等）的验证，必要字段的返回，指定参数传入指定数据返回等验证，API测试可以在和后台定义接口的时候就写，等后台接口写好后直接跑一下测试用例就可验证。

   ```javascript
   describe('api', () => {
   // ...
     test('/api/config', () => {
       expect.assertions(1); // 异步断言数量
       const param = Object.assign(defaultParam, {});
       const path = '/api/config';
       return api.post(path, param)
         .then(response => response.data)
         .then(response => {
           expect(response.errorCode).toBe(200);
         })
     });
   // ....
   
   });
   ```

#### 工具模块测试

工具函数一般要验证各种参数下的函数返回结果

```js
// WorkbenchUtils.js
// @flow
// import type {
  EngineMenuInfo,
} from 'ofo_redux/types';

const ContainerIds = {
  Activate_Bike: 103,
  Activation_Status: 104,
  Tag_Bike_Location: 105,
  Disengage_Lock: 106,
  Unfreeze_Bike: 107,
  Reset_Repaired_Bike: 108,
  Task: 114,
};
const getContainerTitle = (type: number, menus: Array<EngineMenuInfo>) => {
  if (!type) {
    return '';
  }
  if (menus) {
    for (let i = 0; i < menus.length; i += 1) {
      if (menus[i].id === type) {
        return menus[i].name;
      }
    }
  }
  return '';
};
const checkContainer = (type: number, menus: Array<EngineMenuInfo>) => {
  if (type && menus) {
    for (let i = 0; i < menus.length; i += 1) {
      if (menus[i].id === type) {
        return true;
      }
    }
  }
  return false;
};
export {
  ContainerIds,
  getContainerTitle,
  checkContainer,
};
```



```javascript
// WorkbenchUtils.test.js
import {
  ContainerIds,
  getContainerTitle,
  checkContainer,
} from 'ofo_util/WorkbenchUtils';

const menu = [
    {
      "name": "Reset Repaired Bike",
      "icon": "http://ofo-testmeixi-image.oss-us-west-1.aliyuncs.com/report/46d4cd3a8966befb2d01adc4cc4d5a62.png",
      "router": "askofo://so.ofo.engine.intl/?page=EngineBikeRelease",
      "id": 108
    }
    // ...
  ];

describe('WorkbenchUtils', () => {

  test('checkContainer exist', () => {
    expect(checkContainer(ContainerIds.Disengage_Lock, menu)).toBeTruthy();
    expect(checkContainer(ContainerIds.Activate_Bike, menu)).toBeTruthy();
    expect(checkContainer(ContainerIds.Activation_Status, menu)).toBeTruthy();
    expect(checkContainer(ContainerIds.Unfreeze_Bike, menu)).toBeTruthy();
    expect(checkContainer(ContainerIds.Tag_Bike_Location, menu)).toBeTruthy();
    expect(checkContainer(ContainerIds.Reset_Repaired_Bike, menu)).toBeTruthy();
  });

  test('checkContainer not exist', () => {
    expect(checkContainer(ContainerIds.Task, menu)).toBeFalsy();
  });

});
```



### 参考文档

[Engine单元测试调研文档](./01-Engine单元测试调研文档)





