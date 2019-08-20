import React from 'react';
import ReactDOM from 'react-dom';
import SportsPoll from "./SportsPoll";


//Test project if renders without crashing else error
it('renders without crashing', () => {
  const div = document.createElement('div');
  let sportPoll=new SportsPoll();
    ReactDOM.render(<div>{sportPoll.view()}</div>, div);
  ReactDOM.unmountComponentAtNode(div);
});

