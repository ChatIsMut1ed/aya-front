import React from "react";
import "./Forme.css";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Link, useHistory } from "react-router-dom";

import { useSol } from "../../Hooks/api/sol.api";
import { useAuthDispatch } from "../../stores/auth.store.js";

export const Forme1 = () => {
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [date1, setDate1] = useState(null);
    const [SolForm, setSolForm] = useState({
        name: "",
        cin: "",
        todaysdate: "",
        adress: "",
        phone: "",
        certif: "",
        other: "",
        real_estate_fee_number: "",
        place: "",
        region: "",
        deanship: "",
        deanship_place: "",
        space: "",
        status_used_space: "",
        sign_date: date1,
    });

    const [SolFormErrors, setSolFormErrors] = useState({});

    const SolUserMutation = useSol();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await SolUserMutation.mutateAsync(SolForm);
            if (result.data.Sol_status === "successful") {
                history.push({
                    pathname: "/DemandeExpertiseSol",
                    // state: { username: result.data.user.username },
                });
            }
        } catch (error) {
            setSolFormErrors(error?.response?.data);
        }
    };

    const handleChange = (e) => {
        setSolForm({ ...SolForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="e">
                <meta charset="UTF-8" />
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

                <div class="container-contact100">
                    <div class="wrap-contact100">
                        <div className="titl1">
                            <h3>
                                {" "}
                                الجمهورية التونسية<br></br>
                                &nbsp; وزارة الفلاحة
                            </h3>{" "}
                        </div>
                        <div className="titl11">
                            <h3>والصيد البحري والموارد المائية المندوبية الجهوية للتنمية الفلاحية</h3>{" "}
                        </div>
                        <div className="do">
                            <h3>بصفاقس</h3>
                        </div>
                        <div className="er">
                            {" "}
                            <h2>الى السيد المندوب الجهوي للتنمية الفلاحية بصفاقس </h2>
                        </div>

                        <form class="contact100-form validate-form" onSubmit={handleSubmit}>
                            <span class="contact100-form-title">طلب شهادة في إختبار تربة</span>
                            <div className="righ">
                                {SolFormErrors?.message && <p style={{ color: "red" }}>{SolFormErrors?.message}</p>}
                                <input value={SolForm.name} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="name" className="field" placeholder="التعريف بالطالب" required />
                                <input value={SolForm.cin} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="cin" className="field" placeholder="عدد بطاقة التعريف الوطنية" required />
                                <input value={SolForm.todaysdate} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="todaysdate" className="field" placeholder="المؤرخة بتونس بتاريخ " required />
                                <input value={SolForm.adress} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="adress" className="field" placeholder="العنوان" required />
                                <input value={SolForm.phone} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="phone" className="field" placeholder="الهاتف" required />
                                <div className="roa"> الغرض من الشهادة</div>
                                <select value={SolForm.certif} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="certif" className="field" required>
                                    <option>استثمارات وقروض فلاحية </option>
                                    <option>تقييم صلوحية التربة </option>
                                    <option>أخرى</option>
                                </select>
                                <input value={SolForm.other} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="other" className="field" placeholder="أخرى" required />
                                <div className="sos">
                                    التعريف بقطعة الأرض&nbsp;
                                    <br></br> موضوع الاختبار
                                </div>
                                <input value={SolForm.real_estate_fee_number} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="real_estate_fee_number" className="field" placeholder="عدد الرسم العقاري" required />
                                <input value={SolForm.place} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="place" className="field" placeholder=" الموقع( تحديد مفصل ومدقق)" required />
                                <div class="contenu1">
                                    <div class="rouge">
                                        <input value={SolForm.region} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="region" className="field" placeholder="المنطقة" required />
                                    </div>
                                    <div class="vert">
                                        <input value={SolForm.deanship} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="deanship" className="field" placeholder="العمادة" required />
                                    </div>
                                    <div class="bleu">
                                        <input value={SolForm.deanship_place} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="deanship_place" className="field" placeholder="المعتمدية" required />
                                    </div>
                                </div>
                                <input value={SolForm.space} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="space" className="field" placeholder="المساحة(هك)" required />
                                <div className="r">
                                    صيغة الاستغلال<br></br>
                                </div>
                                <div className="ti">
                                    {" "}
                                    كراء &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;بملكية &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;على الشياع&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                    &nbsp;أخرى هي{" "}
                                </div>
                                <input value={SolForm.status_used_space} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="status_used_space" className="field" placeholder="الأستغلال الحالي الارض" required />
                            </div>
                            <div className="last">صفاقس في </div>
                            <Calendar id="basic" value={SolForm.sign_date} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="sign_date" />

                            <div class="container-contact100-form-btn">
                                <button class="contact100-form-btn" type="submit">
                                    <span>
                                        Submit
                                        <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
