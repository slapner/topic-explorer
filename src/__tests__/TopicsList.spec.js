import React from 'react';
import { render } from '@testing-library/react';

import TopicsList from '../components/TopicsList';

const mockFn = jest.fn();
const mockResults = {
  relatedTopics: [
    {
      name: 'mock',
      id: 1,
      starGazersCount: 10,
    },
    {
      name: 'mock',
      id: 2,
      starGazersCount: 10,
    },
  ],
};

test('renders 2 list items', () => {
  render(<TopicsList data={mockResults} handleSubmit={mockFn} />);

  expect(mockResults.relatedTopics).toHaveLength(2);
});
