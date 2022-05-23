import React from 'react';
import "./Forme.css";
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';


export const Forme1 = () => {
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

<div className='titl1'><h3> الجمهورية التونسية<br></br>
&nbsp;
وزارة الفلاحة</h3> </div>
<div className='titl11'><h3>والصيد البحري والموارد المائية
المندوبية الجهوية للتنمية الفلاحية
</h3> </div>
<div className='do'><h3>بصفاقس</h3></div>
<div className='er'> <h2>الى السيد المندوب الجهوي للتنمية الفلاحية بصفاقس </h2></div>
   


<form class="contact100-form validate-form"/>


<span class="contact100-form-title">
طلب شهادة في إختبار تربة
</span>
<div className="righ">
				
				<input type="text" class="field" placeholder="التعريف بالطالب"/>
                <input type="text" class="field" placeholder="عدد بطاقة التعريف الوطنية"/>
                <input type="text" class="field" placeholder='المؤرخة بتونس بتاريخ '/>
				<input type="text" class="field" placeholder="العنوان"/>
				<input type="text" class="field" placeholder="الهاتف"/>
                <div className='roa'> الغرض من الشهادة</div><select class="field" >
                   <option>        
استثمارات وقروض فلاحية </option>
                   <option>تقييم صلوحية التربة </option>
                   <option>أخرى</option>
               </select>
               <input type="text" class="field" placeholder="أخرى"/>
           <div className='sos'>التعريف بقطعة الأرض&nbsp;
           <br></br> موضوع الاختبار</div>    
                <input type="text" class="field" placeholder="عدد الرسم العقاري"/>
                <input type="text" class="field" placeholder=" الموقع( تحديد مفصل ومدقق)"/>
                <div class="contenu1">
  <div class="rouge"><input type="text" class="field" placeholder="المنطقة"/></div>
  <div class="vert"><input type="text" class="field" placeholder="العمادة"/></div>
  <div class="bleu"><input type="text" class="field" placeholder="المعتمدية"/></div>
</div>
<input type="text" class="field" placeholder="المساحة(هك)"/>
<div className='r'>صيغة الاستغلال<br></br></div>
<div className='ti'>  كراء &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;بملكية &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;على الشياع&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;أخرى هي </div>
<input type="text" class="field" placeholder="الأستغلال الحالي الارض"/>
                
				
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
