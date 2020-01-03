import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Fade } from "@material-ui/core";
import IProductDto from "../../../models/product/IProductDto";
import { client } from "../../../infrastructure/api/base/client";
import { tableIcons } from "../../common/tableIcons/tableIcons";

const productApiUrl = "/api/Product";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProductDto[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    var response = await client.get<IProductDto[]>(productApiUrl);
    setProducts(response.data);
  }

  async function handleRowUpdate(product: any) {
    const newProduct: IProductDto = {
      id: parseInt(product.id),
      carbsPer100g: parseInt(product.carbsPer100g),
      kcalPer100g: parseInt(product.kcalPer100g),
      fatPer100g: parseInt(product.fatPer100g),
      proteinPer100g: parseInt(product.proteinPer100g),
      name: product.name
    };
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
    };
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
        style={{ margin: "50px auto 0 auto" }}
        title="My products"
        columns={[
          { title: "nazwa", field: "name" },
          {
            title: "Weglowodany / 100g",
            field: "carbsPer100g",
            type: "numeric"
          },
          { title: "Tłuszcze / 100g", field: "fatPer100g", type: "numeric" },
          { title: "Białko / 100g", field: "proteinPer100g", type: "numeric" },
          { title: "Kcal / 100g", field: "kcalPer100g", type: "numeric" }
        ]}
        data={products}
        icons={tableIcons}
        editable={{
          onRowAdd: handleRowAdd,
          onRowUpdate: handleRowUpdate,
          onRowDelete: handleRowDelete
        }}
      />
    </Fade>
  );
};

export default Products;
