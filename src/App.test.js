import { configure, getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import RestScreen from './Components/Pages/RestScreen'
import Products from './Components/Pages/Products'
import renderer from 'react-test-renderer';
import * as ReactDOM from "react-dom";
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router';
import TestContainer from './Components/TestContainer'

Enzyme.configure({ adapter: new Adapter() });

configure({adapter: new Adapter()});

test('render correctly the content', () => {
  const root = document.createElement("div");
  ReactDOM.render(<App/>, root);
  expect(root.querySelector("p").textContent).toBe("Touch to Start");
});


test("click on touch message", () => {
  const wrapper = mount(<App/>);

  const readLink = wrapper.find("#touch");
  readLink.simulate('click');
  wrapper.update();
  
  expect(wrapper.find("#touch").prop('style')).toHaveProperty(
    'display',
    'none',
  );

  
});

test("test all protected routes", () => {
  const wrapper = mount(<TestContainer componentToPassDown={<Products />}/>);
  expect(wrapper.find("#teste1").text()).toEqual("Escolha o seu Produto");
});

