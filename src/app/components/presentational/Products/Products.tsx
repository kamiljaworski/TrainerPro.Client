import React, { useState, forwardRef, useEffect } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Fade } from '@material-ui/core';
import IProductDto from '../../../models/product/IProductDto';
import { client } from '../../../infrastructure/api/base/client';

const tableIcons: any = {
    Add: forwardRef((props, ref: any) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref: any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref: any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref: any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref: any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref: any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref: any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref: any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref: any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref: any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref: any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref: any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref: any) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref: any) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref: any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref: any) => <ViewColumn {...props} ref={ref} />)
};
const productApiUrl = "/api/Product";

const Products: React.FC = () => {
    const [products, setProducts] = useState<IProductDto[]>([]);

    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        var response = await client.get<IProductDto[]>(productApiUrl);
        setProducts(response.data);
    };

    async function handleRowUpdate(product: any) {
        const newProduct: IProductDto = {
            id: parseInt(product.id),
            carbsPer100g: parseInt(product.carbsPer100g),
            kcalPer100g: parseInt(product.kcalPer100g),
            fatPer100g: parseInt(product.fatPer100g),
            proteinPer100g: parseInt(product.proteinPer100g),
            name: product.name
        }
        await client.put(productApiUrl, newProduct);
        await getProducts();
    }

    async function handleRowAdd(product: any) {
        const newProduct: IProductDto = {
            id: parseInt(product.id),
            carbsPer100g: parseInt(product.carbsPer100g),
            kcalPer100g: parseInt(product.kcalPer100g),
            fatPer100g: parseInt(product.fatPer100g),
            proteinPer100g: parseInt(product.proteinPer100g),
            name: product.name
        }
        await client.post(productApiUrl, newProduct);
        await getProducts();
    }

    async function handleRowDelete(product: IProductDto) {
        await client.delete(productApiUrl + "/" + product.id);
        await getProducts();
    }

    return (
        <Fade in={true}>
            <MaterialTable
                style={{ margin: '50px auto 0 auto' }}
                title="My products"
                columns={[
                    { title: 'name', field: 'name' },
                    { title: 'Carbs / 100g', field: 'carbsPer100g', type: 'numeric' },
                    { title: 'Fats / 100g', field: 'fatPer100g', type: 'numeric' },
                    { title: 'Protein / 100g', field: 'proteinPer100g', type: 'numeric' },
                    { title: 'Kcal / 100g', field: 'kcalPer100g', type: 'numeric' },
                ]
                }
                data={products}
                icons={tableIcons}
                editable={{
                    onRowAdd: handleRowAdd,
                    onRowUpdate: handleRowUpdate,
                    onRowDelete: handleRowDelete
                }}
            />
        </Fade>
    )
}

export default Products;