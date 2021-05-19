import React from "react";

import "./pagination.css";
const Pagination = () => {
  return (
    <div id="pagination">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <nav aria-label="">
              <ul class="pagination ">
                <li class="page-item  active" aria-current="page">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item ">
                  <a class="page-link shadow-none" href="#">
                    2
                  </a>
                </li>
                <li class="page-item ">
                  <a class="page-link shadow-none" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link shadow-none" href="#">
                    4
                  </a>
                </li>
                <li class="page-item" aria-current="page">
                  <a class="page-link shadow-none">5</a>
                </li>
                <li class="page-item">
                  <a class="page-link shadow-none" href="#">
                    6
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link shadow-none" href="#">
                    7
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <nav aria-label="...">
              <ul class="pagination pagination-right ">
                <li class="page-item">
                  <a class="page-link page-link-right shadow-none" href="#">
                    <i class="fas fa-chevron-left"></i>
                  </a>
                </li>

                <li class="page-item">
                  <a class="page-link page-link-right shadow-none" href="#">
                    <i class="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
