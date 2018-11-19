import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadCrumb = (props) => {
  return (
    <div>
      <Breadcrumb tag="nav">
        <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
        <BreadcrumbItem active tag="a" href="#">{props.pageName}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
