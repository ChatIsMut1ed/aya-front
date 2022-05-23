import React from 'react';
import "./Form3.css";
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';

export const Forme3 = () => {
    const [date1, setDate1] = useState(null);


    return (
        <>
        <div className="gla">
        <div class="form-style-10">
<h1>Veuillez remplir les renseignements!<span>de votre demande de facture</span></h1>
<form>
    <div class="section"><span>1</span>Quantité & libellé</div>
    <div class="inner-wrap">
    <label>libellé<input type="text" name="field4" /></label>
    <label>Quantité<input type="number" name="field1" /></label>
       
    </div>

    <div class="section"><span>2</span>Prix unitaire</div>
    <div class="inner-wrap">
        <label>Prix unitaire <input type="number" name="field4" /></label>
    </div>

    <div class="section"><span>3</span>TVA & Timbre</div>
        <div class="inner-wrap">
        <label>TVA <input type="number" name="field5" /></label>
        <label>Timbre <input type="number" name="field6" /></label>
    </div>
    <div class="button-section">
     <input type="submit" name="Sign Up" />
     <span class="privacy-policy">
     <input type="checkbox" name="field7"/>You agree to our Terms and Policy. 
     </span>
    </div>
</form>
</div>
</div>

        
        
             </>
    );
}
