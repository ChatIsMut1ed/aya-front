import React, { useState, useRef } from "react";
import "./Form2.css";
import { Calendar } from "primereact/calendar";
import { Link, useHistory } from "react-router-dom";

import { useCreateDecla, useDeclaByCin } from "../../Hooks/api/declaration.api";
import { useClient } from "../../Hooks/api/auth.api";

import { useAuthDispatch } from "../../stores/auth.store.js";
import { ProgressSpinner } from "primereact/progressspinner";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
export const Declaration = () => {
    // const [date1, setDate1] = useState(null);
    // work
    const toast = useRef(null);
    const authDispatch = useAuthDispatch();
    const clientsQuery = useClient();
    const clientQuery = useDeclaByCin();
    const DeclaMutation = useCreateDecla();

    const history = useHistory();
    const [selectedCity1, setSelectedCity1] = useState(null);

    const [ForageForm, setForageForm] = useState({
        agent_de_representation: "",
        siege_social: "",
        enregistrement_commercial: "",
        id_poche_diwani: "",
        capital_social: "",
        nature_juridique: "",
        apport_etranger: "",
        Numéro_immatriculation_caisse_nationale: "",
        tel: "",
        fax: "",
        email: "",
        systeme_investissement: "",
        nature_projet: "",
        secteur: "",
        activite: "",
        activites_secondaires: "",
        Données_detaillees: "",
        numéro_plaque_immatriculation_1: "",
        numéro_plaque_immatriculation_2: "",
        numéro_plaque_immatriculation_3: "",
        etat: "",
        delegation: "",
        decanat: "",
        adresse_emplacement: "",
        servitude: "",
        espace: "",
        formulation_exploitation: "",
        date_signature: "",
        user_id: "",
    });

    const [ForageFormErrors, setForageFormErrors] = useState({});

    const onCityChange = async (e) => {
        setSelectedCity1(e.value);

        try {
            await clientQuery.mutateAsync(e.value.name);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setForageFormErrors({});
        const formData = new FormData();
        ForageForm.user_id = selectedCity1.code;
        for (let [key, value] of Object.entries(ForageForm)) {
            // product[key] = key !== "logo" ? value.trim() : value;
            formData.append(key, value);
        }
        try {
            await DeclaMutation.mutateAsync(formData);
            // history.push({
            //     pathname: "/Description_Facture",
            // });
            toast.current.show({ severity: "success", summary: "Successful", detail: "Product Created", life: 3000 });
        } catch (error) {
            const errorsObject = error?.response?.data?.errors;
            setForageFormErrors(errorsObject);
            toast.current.show({ severity: "error", summary: "Error Create", detail: `${errorsObject}`, life: 3000 });
        }
    };

    const handleChange = (e) => {
        setForageForm({ ...ForageForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="e">
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" type="image/png" href="images/icons/favicon.ico" />

                <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />

                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

                <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css" />

                <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />

                <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />

                <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />

                <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />

                <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />

                <link rel="stylesheet" type="text/css" href="vendor/noui/nouislider.min.css" />

                <link rel="stylesheet" type="text/css" href="css/util.css" />
                <link rel="stylesheet" type="text/css" href="css/main.css" />

                <meta name="robots" content="noindex, follow" />
                <Toast ref={toast} />
                <div className="container-contact100">
                    <div className="wrap-contact100">
                        <div className="yo">
                            <div className="img">
                                <img alt="" src="/img/agro/entr.jpg" />
                            </div>
                            <div className="titl3">
                                <h3>
                                    {" "}
                                    الجمهورية التونسية<br></br>
                                    &nbsp; وزارة الفلاحة
                                    <br></br> وكالة النهوض بالاستثمارات الفلاحية
                                </h3>{" "}
                            </div>
                        </div>

                        <form className="contact100-form validate-form" onSubmit={handleSubmit}>
                            <span className="contact100-form-title">Declaration</span>
                            <div className="righ">
                                <div className="zo">
                                    <div style={{ display: "grid", justifyContent: "center", padding: "5px" }}>
                                        <Dropdown value={selectedCity1} options={clientsQuery.isSuccess ? clientsQuery.data : []} onChange={onCityChange} optionLabel="name" placeholder="عدد بطاقة التعريف الوطنية" />
                                    </div>

                                    {clientQuery.isIdle || clientQuery.isLoading ? (
                                        ""
                                    ) : clientQuery.isSuccess ? (
                                        <>
                                            {console.log(ForageForm)}
                                            <input value={clientQuery.data.fullname} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="fullname" placeholder="الإسم و اللقب " />
                                            <input value={clientQuery.data.birthday_date} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="birthday_date" placeholder="المؤرخة بتونس بتاريخ " />
                                            <input value={clientQuery.data.adresse} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="adresse" placeholder="العنوان" />
                                            <input value={clientQuery.data.capacity} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="capacity" placeholder="الهاتف" />
                                            <input value={clientQuery.data.cin_place} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="cin_place" placeholder="الهاتف" />
                                            <input value={clientQuery.data.city} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="city" placeholder="الهاتف" />{" "}
                                            <input value={clientQuery.data.code_postal} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="code_postal" placeholder="الإسم و اللقب " />
                                            <input value={clientQuery.data.country} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="country" placeholder="عدد بطاقة التعريف الوطنية" />
                                            <input value={clientQuery.data.diploma} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="diploma" placeholder="المؤرخة بتونس بتاريخ " />
                                            <input value={clientQuery.data.email} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="email" placeholder="العنوان" />
                                            <input value={clientQuery.data.fax} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="fax" placeholder="الهاتف" />
                                            <input value={clientQuery.data.gender} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="gender" placeholder="الهاتف" />
                                            <input value={clientQuery.data.phone_number} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="phone_number" placeholder="الهاتف" />
                                            <input value={clientQuery.data.social_purpose} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="social_purpose" placeholder="الهاتف" />
                                            <input value={clientQuery.data.study_grade} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="study_grade" placeholder="الهاتف" />
                                            <input value={clientQuery.data.tn_abroad ? "vivre à l'étranger" : "n'a pas vécu à l'étranger"} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tn_abroad" placeholder="الهاتف" />
                                        </>
                                    ) : (
                                        ""
                                    )}
                                </div>

                                <br></br>
                                <br></br>
                                <div className="non">
                                    <input value={ForageForm.nom_social} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="nom_social" placeholder="nom_social" />
                                    <input value={ForageForm.agent_de_representation} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="agent_de_representation" placeholder="agent_de_representation" />
                                    <input value={ForageForm.siege_social} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="siege_social" placeholder="siege_social" />
                                    <input value={ForageForm.enregistrement_commercial} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="enregistrement_commercial" placeholder="enregistrement_commercial" />
                                    <input value={ForageForm.id_poche_diwani} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="id_poche_diwani" placeholder="id_poche_diwani" />
                                    <input value={ForageForm.capital_social} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="capital_social" placeholder="capital_social" />
                                    <input value={ForageForm.nature_juridique} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="nature_juridique" placeholder="nature_juridique" />
                                    <input value={ForageForm.apport_etranger} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="apport_etranger" placeholder="apport_etranger" />
                                    <input value={ForageForm.Numéro_immatriculation_caisse_nationale} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="Numéro_immatriculation_caisse_nationale" placeholder="Numéro_immatriculation_caisse_nationale" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="tel" />
                                    <input value={ForageForm.fax} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="fax" placeholder="fax" />
                                    <input value={ForageForm.email} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="email" placeholder="email" />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="non">
                                    <input value={ForageForm.systeme_investissement} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="systeme_investissement" placeholder="systeme_investissement" />
                                    {/* <input value={ForageForm.agent_de_representation} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="type_projet" placeholder="agent_de_representation" /> */}
                                    <input value={ForageForm.nature_projet} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="nature_projet" placeholder="nature_projet" />
                                    <input value={ForageForm.secteur} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="secteur" placeholder="secteur" />
                                    <input value={ForageForm.activite} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="activite" placeholder="activite" />
                                    <input value={ForageForm.activites_secondaires} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="activites_secondaires" placeholder="activites_secondaires" />
                                    <input value={ForageForm.Données_detaillees} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="Données_detaillees" placeholder="Données_detaillees" />
                                    <div className="contenu1">
                                        <div className="vert"></div>
                                        <div className="bleu"></div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className="non">
                                    <input value={ForageForm.numéro_plaque_immatriculation_1} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="numéro_plaque_immatriculation_1" placeholder="numéro_plaque_immatriculation_1" />
                                    <input value={ForageForm.numéro_plaque_immatriculation_2} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="numéro_plaque_immatriculation_2" placeholder="numéro_plaque_immatriculation_2" />
                                    <input value={ForageForm.numéro_plaque_immatriculation_3} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="numéro_plaque_immatriculation_3" placeholder="numéro_plaque_immatriculation_3" />
                                </div>
                                <br />
                                <br />
                                <div className="non">
                                    <input value={ForageForm.etat} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="etat" placeholder="etat" />
                                    <input value={ForageForm.delegation} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="delegation" placeholder="delegation" />
                                    <input value={ForageForm.decanat} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="decanat" placeholder="decanat" />
                                    <input value={ForageForm.adresse_emplacement} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="adresse_emplacement" placeholder="adresse_emplacement" />
                                    <input value={ForageForm.servitude} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="servitude" placeholder="servitude" />
                                    <input value={ForageForm.espace} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="espace" placeholder="espace" />
                                    <input value={ForageForm.formulation_exploitation} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="formulation_exploitation" placeholder="formulation_exploitation" />
                                </div>
                                <br />
                                <br />
                            </div>
                            <div className="last">صفاقس في </div>
                            <Calendar id="basic" value={ForageForm.date_signature} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="date_signature" />

                            <div className="container-contact100-form-btn">
                                {ForageFormErrors?.message && <p style={{ color: "red" }}>{ForageFormErrors?.message}</p>}
                                {DeclaMutation.isLoading ? (
                                    <ProgressSpinner />
                                ) : (
                                    <button className="contact100-form-btn" type="submit">
                                        <span>
                                            Submit
                                            <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
