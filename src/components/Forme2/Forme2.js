import React from 'react';
import "./Form2.css";
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';

export const Forme2 = () => {
    const [date1, setDate1] = useState(null);


    return (
        <>

        <div className='e'>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
        <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
        
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css"/>
        
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
        
        <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css"/>
        
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css"/>
        
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css"/>
        
        <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css"/>
        
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css"/>
        
        <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css"/>
        
        <link rel="stylesheet" type="text/css" href="vendor/noui/nouislider.min.css"/>
        
        <link rel="stylesheet" type="text/css" href="css/util.css"/>
        <link rel="stylesheet" type="text/css" href="css/main.css"/>
        
        <meta name="robots" content="noindex, follow"/>
        
        
        <div class="container-contact100">
        <div class="wrap-contact100">
        
        <div className='yo'>
            <div className='img'><img src='/img/agro/entr.jpg'></img></div>
            <div className='titl3'><h3> الجمهورية التونسية<br></br>
&nbsp;
وزارة الفلاحة
<br></br> وكالة النهوض بالاستثمارات الفلاحية</h3> </div>

        </div>

        
        
        <form class="contact100-form validate-form"/>
        
        
        <span class="contact100-form-title">
        مطلب حول معطيات المائدة السطحية        </span>
        <div className="righ">
                        <div className='zo'>
                        <input type="text" class="field" placeholder="الإسم و اللقب "/>
                        <input type="text" class="field" placeholder="عدد بطاقة التعريف الوطنية"/>
                        <input type="text" class="field" placeholder='المؤرخة بتونس بتاريخ '/>
                        <input type="text" class="field" placeholder="العنوان"/>
                        <input type="text" class="field" placeholder="الهاتف"/>
                        </div>
                   
                           <br></br>
                           <br></br>
                    <div className='non'>
                        <div class="contenu1">
         
          <div class="vert"><input type="text" class="field" placeholder="العمادة"/></div>
          <div class="bleu"><input type="text" class="field" placeholder="المعتمدية"/></div>
        </div>
        <input type="text" class="field" placeholder="المساحة"/>
        <input type="text" class="field" placeholder="موقع الارض "/>
        <input type="text" class="field" placeholder=" الغراسات الموجودة"/>
        <input type="text" class="field" placeholder="نوع المشروع "/>
        </div>
        <br></br>
        <br></br>
        <div className='eo'>
        <input type="text" class="field" placeholder="ملاحظات "/>   
        </div>
        
                        
                        
                    </div>
                    <div className='last'>صفاقس في </div>
                    <Calendar id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
        
        
        <div class="container-contact100-form-btn">
        <button class="contact100-form-btn">
        <span>
        Submit
        <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
        </span>
        </button>
        </div>
        
        </div>
        </div>
        </div>
        
             </>
    );
}
