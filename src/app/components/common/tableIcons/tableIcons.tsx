import React, { forwardRef } from 'react';
import {
    AddBox,
    ArrowUpward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn
} from '@material-ui/icons';

export const tableIcons: any = {
    Add: forwardRef((props, ref: any) => <AddBox { ...props } ref = { ref } />),
    Check: forwardRef((props, ref: any) => <Check { ...props } ref = { ref } />),
    Clear: forwardRef((props, ref: any) => <Clear { ...props } ref = { ref } />),
    Delete: forwardRef((props, ref: any) => <DeleteOutline { ...props } ref = { ref } />),
    DetailPanel: forwardRef((props, ref: any) => <ChevronRight { ...props } ref = { ref } />),
    Edit: forwardRef((props, ref: any) => <Edit { ...props } ref = { ref } />),
    Export: forwardRef((props, ref: any) => <SaveAlt { ...props } ref = { ref } />),
    Filter: forwardRef((props, ref: any) => <FilterList { ...props } ref = { ref } />),
    FirstPage: forwardRef((props, ref: any) => <FirstPage { ...props } ref = { ref } />),
    LastPage: forwardRef((props, ref: any) => <LastPage { ...props } ref = { ref } />),
    NextPage: forwardRef((props, ref: any) => <ChevronRight { ...props } ref = { ref } />),
    PreviousPage: forwardRef((props, ref: any) => <ChevronLeft { ...props } ref = { ref } />),
    ResetSearch: forwardRef((props, ref: any) => <Clear { ...props } ref = { ref } />),
    Search: forwardRef((props, ref: any) => <Search { ...props } ref = { ref } />),
    SortArrow: forwardRef((props, ref: any) => <ArrowUpward { ...props } ref = { ref } />),
    ThirdStateCheck: forwardRef((props, ref: any) => <Remove { ...props } ref = { ref } />),
    ViewColumn: forwardRef((props, ref: any) => <ViewColumn { ...props } ref = { ref } />)
};