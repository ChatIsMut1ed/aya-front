import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { ProductService } from "../../service/ProductService";

import { Skeleton } from "primereact/skeleton";
import { Link, useHistory } from "react-router-dom";
import { useFactureDes, useFactureDesById, useDeleteFactureDesById, useCreateFactureDes, useModifyFactureDes } from "../../Hooks/api/factureDesc.api";
import { useAuthDispatch } from "../../stores/auth.store.js";
export const Description_Facture = () => {
    // work
    const FactureDessQuery = useFactureDes();
    const FactureDesByIdQuery = useFactureDesById();
    const FactureDesDeleteByIdQuery = useDeleteFactureDesById();
    const FactureDesCreateQuery = useCreateFactureDes();
    const FactureDesModifyQuery = useModifyFactureDes();
    const authDispatch = useAuthDispatch();
    const history = useHistory();
    let emptyProduct = {
        id: null,
        nom: "",
        adresse: "",
        email: "",
        num_bank: "",
        tel: "",
        ref_tva: "",
    };
    const [formErrors, setFormErrors] = useState({});
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [factureDialog, setfactureDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormErrors({});
        const formData = new FormData();

        for (let [key, value] of Object.entries(product)) {
            // product[key] = key !== "logo" ? value.trim() : value;
            formData.append(key, value);
        }
        if (product.id == null) {
            try {
                await FactureDesCreateQuery.mutateAsync(formData);
                history.push({
                    pathname: "/Description_Facture",
                });
                setProducts(products);
                setProductDialog(false);
                setProduct(emptyProduct);
                toast.current.show({ severity: "success", summary: "Successful", detail: "Product Created", life: 3000 });
            } catch (error) {
                const errorsObject = error?.response?.data?.errors;
                setFormErrors(errorsObject);
                toast.current.show({ severity: "error", summary: "Error Create", detail: `${errorsObject}`, life: 3000 });
            }
        } else {
            try {
                await FactureDesModifyQuery.mutateAsync(product);
                history.push({
                    pathname: "/Description_Facture",
                });
                setProducts(products);
                setProductDialog(false);
                setProduct(emptyProduct);
                toast.current.show({ severity: "success", summary: "Successful", detail: "Product Created", life: 3000 });
            } catch (error) {
                const errorsObject = error?.response?.data?.errors;
                setFormErrors(errorsObject);
                toast.current.show({ severity: "error", summary: "Error Update", detail: `${errorsObject}`, life: 3000 });
            }
        }

        // if (product.name.trim()) {
        //     let _products = [...products];
        //     let _product = { ...product };
        //     if (product.id) {
        //         const index = findIndexById(product.id);

        //         _products[index] = _product;
        //         toast.current.show({ severity: "success", summary: "Successful", detail: "Product Updated", life: 3000 });
        //     } else {
        //         _product.id = createId();
        //         _product.image = "product-placeholder.svg";
        //         _products.push(_product);
        //         toast.current.show({ severity: "success", summary: "Successful", detail: "Product Created", life: 3000 });
        //     }

        //     setProducts(_products);
        //     setProductDialog(false);
        //     setProduct(emptyProduct);
        // }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };
    const facture = (product) => {
        setProduct({ ...product });
        setfactureDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = async (e) => {
        // let _products = products.filter((val) => val.id !== product.id);
        // setProducts(_products);
        // setDeleteProductDialog(false);
        // setProduct(emptyProduct);
        // toast.current.show({ severity: "success", summary: "Successful", detail: "Product Deleted", life: 3000 });
        try {
            await FactureDesDeleteByIdQuery.mutateAsync(product.id);
            history.push({
                pathname: "/Description_Facture",
            });
            setProducts(products);
            setDeleteProductDialog(false);
            setProduct(emptyProduct);
            toast.current.show({ severity: "success", summary: "Successful", detail: "Product Created", life: 3000 });
        } catch (error) {
            const errorsObject = error?.response?.data?.errors;
            setFormErrors(errorsObject);
            toast.current.show({ severity: "error", summary: "Error Delete", detail: `${errorsObject}`, life: 3000 });
        }
    };

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: "success", summary: "Successful", detail: "Products Deleted", life: 3000 });
    };

    const onCategoryChange = (e) => {
        let _product = { ...product };
        _product["category"] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                    <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
                </div>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="Export" icon="pi pi-upload" className="p-button-help bg-green-400 border-green-400" onClick={exportCSV} />
            </React.Fragment>
        );
    };

    const codeBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Code</span>
                {rowData.nom}
            </>
        );
    };

    const nameBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.tel}
            </>
        );
    };
    const nameBodyTemplate1 = (rowData) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.adresse}
            </>
        );
    };

    const imageBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Image</span>
                <img src={`assets/demo/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2" width="100" />
            </>
        );
    };

    const priceBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {rowData.num_bank}
            </>
        );
    };
    const priceBodyTemplate2 = (rowData) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {rowData.email}
            </>
        );
    };
    const priceBodyTemplate1 = (rowData) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {rowData.ref_tva}
            </>
        );
    };

    const categoryBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Category</span>
                {rowData.category}
            </>
        );
    };

    const ratingBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Reviews</span>
                <Rating value={rowData.rating} readonly cancel={false} />
            </>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>
            </>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning mt-2" onClick={() => confirmDeleteProduct(rowData)} />
                <Button icon="pi pi-external-link" className="p-button-rounded p-button-success mr-2" onClick={() => facture(rowData)} />
            </div>
        );
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 className="m-0">Manage Products</h5>
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const productDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </>
    );
    const deleteProductDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </>
    );
    const deleteProductsDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </>
    );
    const skeletonTemplate = () => {
        return <Skeleton></Skeleton>;
    };
    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                    {FactureDessQuery.isIdle || FactureDessQuery.isLoading ? (
                        <>
                            {[1, 2, 3, 4].map((n) => (
                                <DataTable value={products} className="p-datatable-striped">
                                    <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
                                    <Column field="code" header="Nom de Société" sortable body={skeletonTemplate} headerStyle={{ width: "15%", minWidth: "10rem" }} className="bg-cyan-400 border-round-top"></Column>

                                    <Column field="name" header="Num_tel" sortable body={skeletonTemplate} headerStyle={{ width: "15%", minWidth: "10rem" }} className="bg-indigo-300 border-round-top"></Column>
                                    <Column field="price" header="Numéro Bancaire" body={skeletonTemplate} sortable headerStyle={{ width: "15%", minWidth: "8rem" }} className="bg-pink-200 border-round-top"></Column>
                                    <Column field="name" header="Adresse" sortable body={skeletonTemplate} headerStyle={{ width: "15%", minWidth: "10rem" }} className="bg-indigo-300 border-round-top"></Column>
                                    <Column field="Doit" header="réf TVA" body={skeletonTemplate} sortable headerStyle={{ width: "15%", minWidth: "8rem" }} className="bg-pink-200 border-round-top"></Column>
                                    <Column field="price" header="Email" body={skeletonTemplate} sortable headerStyle={{ width: "15%", minWidth: "8rem" }} className="bg-green-300 border-round-top"></Column>
                                    <Column body={skeletonTemplate} style={{ width: "20px" }}></Column>
                                </DataTable>
                            ))}
                        </>
                    ) : FactureDessQuery.isSuccess ? (
                        <DataTable
                            ref={dt}
                            value={FactureDessQuery.data}
                            selection={selectedProducts}
                            onSelectionChange={(e) => setSelectedProducts(e.value)}
                            dataKey="id"
                            paginator
                            rows={10}
                            rowsPerPageOptions={[5, 10, 25]}
                            className="datatable-responsive"
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                            globalFilter={globalFilter}
                            emptyMessage="No products found."
                            header={header}
                            responsiveLayout="scroll"
                        >
                            <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
                            <Column field="code" header="Nom de Société" sortable body={codeBodyTemplate} headerStyle={{ width: "15%", minWidth: "10rem" }} className="bg-cyan-400 border-round-top"></Column>

                            <Column field="name" header="Num_tel" sortable body={nameBodyTemplate} headerStyle={{ width: "15%", minWidth: "10rem" }} className="bg-indigo-300 border-round-top"></Column>
                            <Column field="price" header="Numéro Bancaire" body={priceBodyTemplate} sortable headerStyle={{ width: "15%", minWidth: "8rem" }} className="bg-pink-200 border-round-top"></Column>
                            <Column field="name" header="Adresse" sortable body={nameBodyTemplate1} headerStyle={{ width: "15%", minWidth: "10rem" }} className="bg-indigo-300 border-round-top"></Column>
                            <Column field="Doit" header="réf TVA" body={priceBodyTemplate1} sortable headerStyle={{ width: "15%", minWidth: "8rem" }} className="bg-pink-200 border-round-top"></Column>
                            <Column field="price" header="Email" body={priceBodyTemplate2} sortable headerStyle={{ width: "15%", minWidth: "8rem" }} className="bg-green-300 border-round-top"></Column>
                            <Column body={actionBodyTemplate} style={{ width: "20px" }}></Column>
                        </DataTable>
                    ) : (
                        ""
                    )}

                    <Dialog visible={productDialog} style={{ width: "450px" }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                        {/* {product.image && <img src={`assets/demo/images/product/${product.image}`} alt={product.image} width="150" className="mt-0 mx-auto mb-5 block shadow-2" />} */}
                        <div className="field">
                            <label htmlFor="Nom soc">Nom de Société</label>
                            <InputText id="Nom soc" value={product.nom} onChange={(e) => onInputChange(e, "nom")} required autoFocus className={classNames({ "p-invalid": submitted && !product.name })} />
                            {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
                        </div>
                        <div className="field">
                            <label htmlFor="Num tel">Num_tel</label>
                            <InputText id="Num tel" value={product.tel} onChange={(e) => onInputChange(e, "tel")} required autoFocus className={classNames({ "p-invalid": submitted && !product.num_tel })} />
                            {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
                        </div>
                        <div className="field">
                            <label htmlFor="Num banc">Numéro Bancaire</label>
                            <InputText id="Num banc" value={product.num_bank} onChange={(e) => onInputChange(e, "num_bank")} required autoFocus className={classNames({ "p-invalid": submitted && !product.num_bank })} />
                            {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
                        </div>
                        <div className="field">
                            <label htmlFor="Adresse">Adresse</label>
                            <InputText id="Adresse" value={product.adresse} onChange={(e) => onInputChange(e, "adresse")} required autoFocus className={classNames({ "p-invalid": submitted && !product.adress })} />
                            {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
                        </div>
                        <div className="field">
                            <label htmlFor="réf TVA">réf TVA</label>
                            <InputText id="réf TVA" value={product.ref_tva} onChange={(e) => onInputChange(e, "ref_tva")} required autoFocus className={classNames({ "p-invalid": submitted && !product.ref_tva })} />
                            {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
                        </div>
                        <div className="field">
                            <label htmlFor="Email">Email</label>
                            <InputText id="Email" value={product.email} onChange={(e) => onInputChange(e, "email")} required autoFocus className={classNames({ "p-invalid": submitted && !product.email })} />
                            {/* {submitted && !product.name && <small className="p-invalid">Name is required.</small>} */}
                        </div>
                    </Dialog>
                    <Dialog visible={factureDialog} style={{ width: "450px" }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                        {FactureDesByIdQuery.isIdle || FactureDesByIdQuery.isLoading ? (
                            <>
                                <skeletonTemplate />
                            </>
                        ) : FactureDesByIdQuery.isSuccess ? (
                            ""
                        ) : (
                            ""
                        )}
                        {/* <aside className="profile-card" />
                        <section className="product">
                            <div className="product__photo">
                                <div className="photo-container">
                                    <div className="photo-main">
                                        <div className="controls">
                                            <i className="material-icons">share</i>
                                            <i className="material-icons">favorite_border</i>
                                        </div>
                                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice" />
                                    </div>
                                    <div className="photo-album">
                                        <ul>
                                            <li>
                                                <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                                            </li>
                                            <li>
                                                <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" />
                                            </li>
                                            <li>
                                                <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" />
                                            </li>
                                            <li>
                                                <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="title">
                                    <h1>Delicious Apples</h1>
                                    <span>COD: 45999</span>
                                </div>
                                <div class="price">
                                    R$ <span>7.93</span>
                                </div>
                                <div class="variant">
                                    <h3>SELECT A COLOR</h3>
                                    <ul>
                                        <li>
                                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" />
                                        </li>
                                        <li>
                                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" />
                                        </li>
                                        <li>
                                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" />
                                        </li>
                                        <li>
                                            <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <h3>BENEFITS</h3>
                                    <ul>
                                        <li>Apples are nutricious</li>
                                        <li>Apples may be good for weight loss</li>
                                        <li>Apples may be good for bone health</li>
                                        <li>They're linked to a lowest risk of diabetes</li>
                                    </ul>
                                </div>
                                <button className="buy--btn">ADD TO CART</button>
                            </div>
                        </section>

                        <footer>
                            <p>
                                Design from <a href="https://dribbble.com/shots/5216438-Daily-UI-012">dribbble shot</a> of <a href="https://dribbble.com/rodrigorramos">Rodrigo Ramos</a>
                            </p>
                        </footer> */}
                    </Dialog>

                    <Dialog visible={deleteProductDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                            {product && (
                                <span>
                                    Are you sure you want to delete <b>{product.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductsDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                            {product && <span>Are you sure you want to delete the selected products?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};
