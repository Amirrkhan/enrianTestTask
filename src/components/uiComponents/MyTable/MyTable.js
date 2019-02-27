import React from 'react';

import ReactTable from 'react-table'
import Button from '../Button/button'
import Pagination from '../../../functions/pagination'



const MyTable = (props) => {
    return (
        <div className={`myTable ${props.className}`}>
            {props.withHeader ? 
            (
                <div className="myTable__header">
                    <div className="myTable__name">
                        <div className="myTable__eclipse"/>
                        <span className="myTable__text">{props.tableName}</span>
                    </div>
                    <Button className="button--add" buttonText="Add"/>
                </div>
            ) 
            : 
            null}
            <ReactTable 
                data={props.tableConfig.data} 
                columns={props.tableConfig.columns}
                showPagination={props.pagination}
                minRows={props.minRows}
                sortable={props.sortable}
                
                PaginationComponent={props.customPagination ? Pagination : null}
            />
        </div>
    );
};

export default MyTable;