import React from "react";

const Pagination = ({ setPage, page, totalPages }: any) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${page == 1 && "disabled"}`}>
          <a
            className="page-link"
            onClick={() => page > 1 && setPage(page - 1)}
          >
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" onClick={() => setPage(1)}>
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" onClick={() => setPage(2)}>
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" onClick={() => setPage(3)} href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a
            className={`page-link ${totalPages == page && "disabled"})`}
            onClick={() => totalPages !== page && setPage(page + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
