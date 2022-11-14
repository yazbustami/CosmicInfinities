import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid' }}
        >
          <ThoughtForm />
        </div>

        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Cosmically thinking ...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Cosmic Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
