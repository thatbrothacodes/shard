import { combineReducers } from "redux";
import experiences from '../experiences/reducers';
import insights from '../insights/reducers';
import overview from '../overview/reducers';
import segments from '../segments/reducers';
import vistor from '../visitor/reducers';

export default combineReducers({
    experiences,
    insights,
    overview,
    segments,
    vistor
});
