import React, { useState } from "react";
import Pagination from './components/Pagination';


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Devika",
    },
    {
      id: 2,
      title: "Nandana",
    },
    {
      id: 3,
      title: "Stephin",
    },
    {
      id: 4,
      title: "Aswathy",
    },
    {
      id: 5,
      title: "Sarith",
    },
    {
      id: 6,
      title: "Shijin",
    },
    {
      id: 7,
      title: "Raju",
    },
    {
      id: 8,
      title: "Damu",
    },

    {
      id: 9,
      title: "Devika",
    },
    {
      id: 10,
      title: "Nandana",
    },
    {
      id: 11,
      title: "Stephin",
    },
    {
      id: 12,
      title: "Aswathy",
    },
    {
      id: 13,
      title: "Sarith",
    },
    {
      id: 14,
      title: "Shijin",
    },
    {
      id: 15,
      title: "raju",
    },
    {
      id: 16,
      title: "damu",
    },
    {
      id: 17,
      title: "Stephin",
    },
    {
      id: 18,
      title: "Aswathy",
    },
    {
      id: 19,
      title: "Sarith",
    },
    {
      id: 20,
      title: "Shijin",
    },
    {
      id: 21,
      title: "raju",
    },
    {
      id: 22,
      title: "damu",
    },
    {
      id: 23,
      title: "raju",
    },
    {
      id: 24,
      title: "damu",
    },
    {
      id: 25,
      title: "damu",
    },
    {
      id: 26,
      title: "raju",
    },
    {
      id: 27,
      title: "damu",
    },
    {
      id: 28,
      title: "damu",
    },
    {
      id: 29,
      title: "raju",
    },
    {
      id: 30,
      title: "damu",
    },

  ]);
  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="App">
      <div className="container py-4" >
        {/* <div className="row"> */}
        {posts.slice(pagination.start, pagination.end).map((post) => (
          <div style={{ paddingLeft: 250, marginTop: 15, marginBottom: 50 }} key={post.id}>
            {/* <div className="card"> */}
            {/* <div className="card-body"> */}
            <h5 style={{ marginLeft: 200 }}>
              {post.id} {post.title}

            </h5>
            {/* //<p>{post.body}</p> */}
          </div>
          // </div>
          // </div>
        ))}
        {/* </div> */}

        <Pagination style={{ paddingTop: -550, }}
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
        />
      </div>
    </div>
  );
}

export default App;