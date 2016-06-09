jest.dontMock('./NotFound.jsx');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const NotFound = require('./NotFound.jsx').default;

describe('NotFoundComponent', () => {

  it('should render', () => {
    var instance = TestUtils.renderIntoDocument(<NotFound />);

    expect(instance.refs.title.textContent).toEqual('404. Not found.');
  });

});
