import React from 'react';
import ReactDOM from 'react-dom';
import SportPoll from "./SportPoll";


//Test project if renders without crashing else error
it('renders without crashing', () => {
  const div = document.createElement('div');
  let sportPoll=new SportPoll();
    ReactDOM.render(<div>{sportPoll.view()}</div>, div);
  ReactDOM.unmountComponentAtNode(div);
});
