import React from 'react';

import Sticker from '../../components/uiComponents/Sticker/sticker'
import Input from '../../components/uiComponents/Input/input'
import Button from '../../components/uiComponents/Button/button'
import MyTable from '../../components/uiComponents/MyTable/MyTable'


const tableConfig_small = {
    data: [{
        name: "Test Name",
        role: "Designer"
    },
    {
        name: "Test Name",
        role: "Project lead"
    },
    {
        name: "Test Name",
        role: "Java developer"
    },{
        name: "Test Name",
        role: "Java developer"
    }],
    columns: [
        {
            Header: "Fullname",
            accessor: 'name'
        },
        {
            Header: "Role",
            accessor: 'role'
        }
    ]
    }

const tableConfig_big = {
    data: [{
        heading1: "Test Name",
        heading2: "Designer",
        heading3: 'dolor sit amet',
        heading4: "heading 4 text"
    },
    {
        heading1: "Test Name",
        heading2: "Designer",
        heading3: 'dolor sit amet',
        heading4: "heading 4 text"
    },
    {
        heading1: "Test Name",
        heading2: "Designer",
        heading3: 'dolor sit amet',
        heading4: "heading 4 text"
    },
    {
        heading1: "Test Name",
        heading2: "Designer",
        heading3: 'dolor sit amet',
        heading4: "heading 4 text"
    },
    {
        heading1: "Test Name",
        heading2: "Designer",
        heading3: 'dolor sit amet',
        heading4: "heading 4 text"
    },
    {
        heading1: "Test Name",
        heading2: "Designer",
        heading3: 'dolor sit amet',
        heading4: "heading 4 text",
        
    }
    ],
    columns: [
        {
            Header: "Heading",
            accessor: 'heading1'
        },  
        {
            Header: "Heading",
            accessor: 'heading2'
        },
        {
            Header: "Heading",
            accessor: 'heading3'
        },
        {
            Header: "Heading",
            accessor: 'heading4'
        },
        {
            Header: "",
            accessor: 'buttons',
            Cell: row => ( 
                            <div  className="box" style={{justifyContent: 'flex-end', paddingRight: '117px'}}>
                                <div className="icon icon--pen" style={{width: '26px', height: '26px', marginRight: '35.65px'}}/>
                                <div className="icon icon--rubbish" style={{width: '26px', height: '26px'}}/>
                            </div>
                         )
        },
    ]
}

const showIcon = () => {

}


const PageWithTest = () => {
    return (
        <div className="layout__container">
            <div className="box">
                <Sticker className="sticker--small sticker--with-padding">
                    <form action="" style={{marginTop: '103px'}}> 
                        <Input className="input--big" labelText="Email"/>
                        <div className="box">
                            <Input className="input--small" labelText="Phone number"/>
                            <Input className="input--small" labelText="Date of birth"/>
                        </div>
                        <Button buttonText="Submit" className="button--submit"/>
                    </form>
                </Sticker>
                <Sticker className="sticker--small">
                    <MyTable 
                        pagination={false} 
                        tableConfig={tableConfig_small} 
                        withHeader={true}
                        minRows={4}
                        sortable={false}
                        tableName='People'
                        className='myTable--people'
                        />
                </Sticker>
            </div>
            <Sticker className='sticker--big'>
                <MyTable 
                    pagination={true} 
                    tableConfig={tableConfig_big} 
                    withHeader={true}
                    minRows={6}
                    sortable={false}
                    tableName='Application'
                    className='myTable--application'
                    customPagination={true}
                    />
            </Sticker>
        </div>
    );
};

export default PageWithTest;