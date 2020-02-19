import React from 'react';
import './Pagination.scss';

const Pagination = ({currentPage, gnomesPerPage, totalGnomes, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalGnomes / gnomesPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav className="pagination-nav">
            <ul className="page-list">
                {
                    pageNumbers.map(number => (
                        <li key={number} onClick={() => paginate(number)} className={"page" + (currentPage === number ? " active" : "")}>
                            {number}
                        </li> 
                    ))
                }
            </ul>
        </nav>
    );
}

export default Pagination