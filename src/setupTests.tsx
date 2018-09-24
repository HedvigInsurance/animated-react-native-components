import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock('react-native', () => require('react-native-mock-render'), {virtual: true})
